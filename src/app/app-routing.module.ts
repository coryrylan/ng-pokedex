import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonModalComponent } from './pokemon-modal/pokemon-modal.component';

export const routes: Routes = [
  { path: '', redirectTo: '/pokemon', pathMatch: 'full' },
  {
    path: 'pokemon', component: PokemonListComponent, children: [
      { path: ':id', component: PokemonModalComponent }
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
