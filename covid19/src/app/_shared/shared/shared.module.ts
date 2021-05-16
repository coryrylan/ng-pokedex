import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {  HttpClientModule } from "@angular/common/http"
/////////////import { NgxSpinnerModule } from 'ngx-spinner';


const array=[
  NgbModule,
  HttpClientModule,
  

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    array,
    
  ],
  exports:[array],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class SharedModule { }
