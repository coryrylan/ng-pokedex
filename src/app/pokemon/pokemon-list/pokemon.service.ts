import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// https://github.com/angular/angular-cli/issues/8165
// https://github.com/ReactiveX/rxjs/issues/2988
// import { switchMap, startWith, map } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators/switchMap';
import { startWith } from 'rxjs/operators/startWith';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';

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
    this.pokemon = this.pokemonDataService.pokemon.pipe(
      switchMap(pokemon => this.searchTerm.pipe(
        map(term => this.filter(pokemon, term)),
        startWith(pokemon)
      ))
    );
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
