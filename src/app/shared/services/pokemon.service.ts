import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { Pokemon } from '../interfaces/pokemon';
import { pokemonData } from './../data';

@Injectable()
export class PokemonService {
  pokemon: Observable<Pokemon[]>;
  private _pokemon: BehaviorSubject<Pokemon[]>;
  private store: { pokemon: any[] };

  // Wapping the data in an Observable as the underlying implementation
  // will eventually call an API and cache the data
  constructor(private http: Http) {
    this.store = { pokemon: pokemonData };
    this._pokemon = new BehaviorSubject(Object.assign({}, this.store).pokemon);
    this.pokemon = this._pokemon.asObservable().map(pokemon => {
      pokemon.forEach(p => {
        p = this.parseId(p);
        p = this.upperCaseName(p);
      });

      return pokemon.slice(0);
    });
  }

  private parseId(pokemon: Pokemon) {
    if (!pokemon['id']) {
      pokemon['id'] = +pokemon.url.match(/\/(\d+)/)[1];
    }

    return pokemon;
  }

  private upperCaseName(pokemon: Pokemon) {
    pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    return pokemon;
  }
}
