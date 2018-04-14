import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject, Observable } from 'rxjs';
import { map, tap, startWith, switchMap } from 'rxjs/operators';

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
      switchMap((pokemon: Pokemon[]) => this.searchTerm.pipe(
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
