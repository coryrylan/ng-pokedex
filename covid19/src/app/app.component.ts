import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'covid19';
  constructor(private ngxService: NgxUiLoaderService){
   
    
  }

  ngOnInit(){
  
  }

}
