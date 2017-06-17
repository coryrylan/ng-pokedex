import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';

import { Pokemon } from './../../common/interfaces/pokemon';
import { PokemonDataService } from './../../common/core/services/pokemon-data.service';

@Injectable()
export class PokemonService {
  readonly pokemon: Observable<Pokemon[]>;
  private searchTerm = new Subject<string>();

  constructor(
    private title: Title,
    private pokemonDataService: PokemonDataService
  ) {
    this.pokemon = this.pokemonDataService.pokemon.switchMap(pokemon =>
      this.searchTerm
        .map(term => this.filter(pokemon, term))
        .startWith(pokemon));
  }

  setTitle() {
    this.title.setTitle('Search for Pokémon');
  }

  search(term: string) {
    this.searchTerm.next(term);
  }

  private filter(pokemon: Pokemon[], value: string) {
    return pokemon.filter(p => value ? p.name.toLowerCase().includes(value.toLowerCase()) : pokemon);
  }
}
