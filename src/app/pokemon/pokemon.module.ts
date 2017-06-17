import { NgModule } from '@angular/core';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { SharedModule } from './../common/shared/shared.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

@NgModule({
  imports: [
    SharedModule,
    PokemonRoutingModule
  ],
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent
  ]
})
export class PokemonModule { }
