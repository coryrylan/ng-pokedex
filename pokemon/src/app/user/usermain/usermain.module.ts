import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermainRoutingModule } from './usermain-routing.module';
import { UsermainComponent } from './usermain.component';


@NgModule({
  declarations: [UsermainComponent],
  imports: [
    CommonModule,
    UsermainRoutingModule
  ]
})
export class UsermainModule { }
