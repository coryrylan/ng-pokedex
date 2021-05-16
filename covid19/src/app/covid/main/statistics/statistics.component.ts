import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../_services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  statisData: any;
  total: any;

  constructor(private apiservice:ApiService,
    private tostr:ToastrService) { }

  ngOnInit(): void {
    this.apiservice.getStatics().subscribe((res:any)=>{
      console.log(res);
if(res.response){
  this.statisData=res.response;
  this.total=res.results;
  
  this.tostr.success(`Success - Total data ${this.total}`)
}
    
    },error=>{
this.tostr.error(error)
    })
  }

}
