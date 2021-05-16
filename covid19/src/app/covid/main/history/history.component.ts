import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { isEmpty } from 'rxjs/operators';
import { ApiService } from '../../../_services/api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  countries: any;
  @ViewChild('Uform', { static: true }) Uform: any;

  model:any={}
  data: any;
  resdata: any=[];
  isEmpty: boolean=false;
  constructor(private apiService:ApiService,
    
    ) { }

  ngOnInit(): void {
this.getCoutry()

  
  }
  getCoutry(){
    this.apiService.getCountries().subscribe((res:any)=>{
      console.log("res",res);

      this.countries= res.response
    })
  }

  save(form:any){
  
    console.log("mode", this.model);

    this.apiService.getHistory(form).subscribe((res:any)=>{
     
      if(res.response && res.response.length>0){
        this.isEmpty=!isEmpty
        this.resdata=res.response
      }
      else{
this.isEmpty=true
      }
     
     
    })
  }


  reset(){
    this.isEmpty=false;
    this.Uform.form.reset();
    this.resdata=[]
  }
}
