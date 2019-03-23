import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { Pokemon } from './../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {
  pokemon: Observable<Pokemon[]>;
  constructor(private http: HttpClient) {
    this.pokemon = this.http.get<Pokemon[]>('/api/pokemon.json').pipe(
      map(pokemon => pokemon.map(p => this.setPokemon(p))),
      shareReplay(1)
    );
  }

  private setPokemon(pokemon: Pokemon) {
    pokemon = this.parseId(pokemon);
    pokemon = this.upperCaseName(pokemon);
    return pokemon;
  }

  private parseId(pokemon: Pokemon) {
    if (!pokemon.id) {
      pokemon.id = +pokemon.url.match(/\/(\d+)/)[1];
    }

    return pokemon;
  }

  private upperCaseName(pokemon: Pokemon) {
    pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    return pokemon;
  }
}
