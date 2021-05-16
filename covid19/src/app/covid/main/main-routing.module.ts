import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { CoutriesComponent } from './coutries/coutries.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { HistoryComponent } from './history/history.component';
import { UpdateComponent } from '.\/update/update.component';

const routes: Routes = [
  {path:"",redirectTo:'countries',pathMatch:'full'},
  { path: '', component: MainComponent,
children:[
  {
    path:'countries',
    component:CoutriesComponent
  },{
    path:'statistics',
    component:StatisticsComponent
  },
  {
    path:"history",
    component:HistoryComponent
  },
  {
    path:"update",
    component:UpdateComponent
  },

]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
