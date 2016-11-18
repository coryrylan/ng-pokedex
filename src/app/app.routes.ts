import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonModalComponent } from './pokemon-modal/pokemon-modal.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'pokemon', component: PokemonListComponent, children: [
      { path: ':id', component: PokemonModalComponent }
    ]
  },
  { path: 'about', component: AboutComponent }
];
