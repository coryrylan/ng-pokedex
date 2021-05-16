import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsermainComponent } from './usermain.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';

const routes: Routes = [
  {
path:'',
redirectTo:'contact',
pathMatch:"full"
  },
{
  path:"",
component:UsermainComponent,

  children:[
    { path: 'user', component: UsermainComponent },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
  ]
  
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermainRoutingModule { }
