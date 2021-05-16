import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Pokemon } from './../../common/interfaces/pokemon';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  providers: [PokemonService]
})
export class PokemonListComponent {
  pokemon: Observable<Pokemon[]>;
  showGrid = true;

  constructor(private pokemonService: PokemonService) {
    this.pokemonService.setTitle();
    this.pokemon = this.pokemonService.pokemon;
  }

  search(term: string) {
    this.pokemonService.search(term);
  }
}
