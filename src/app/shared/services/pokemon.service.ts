import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';

import { Pokemon } from '../interfaces/pokemon';
import { testPokemon, testSinglePokemon } from './../data';

@Injectable()
export class PokemonService {
  pokemon: Observable<Pokemon[]>;
  private _pokemon: BehaviorSubject<Pokemon[]>;
  private store: { pokemon: any[] };

  constructor(private http: Http) {
    this.store = { pokemon: testPokemon };
    this._pokemon = new BehaviorSubject(Object.assign({}, this.store).pokemon);
    this.pokemon = this._pokemon.asObservable().map(pokemon => {
      pokemon.forEach(p => {
        p = this.parseId(p);
        p = this.upperCaseName(p);
      });

      return pokemon;
    });

    this.crawl();
  }

  loadAll() {
    this.emitStore();
  }

  load(id: number) {
    let notFound = true;

    Observable.of(testSinglePokemon).subscribe(data => {
      this.store.pokemon.forEach((item, index) => {
        if (item.id === data.id) {
          this.store.pokemon[index] = data;
          notFound = false;
        }
      });

      if (notFound) {
        this.store.pokemon.push(data);
      }

      this.emitStore();
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

  private emitStore() {
    this._pokemon.next(Object.assign({}, this.store).pokemon);
  }

  private crawl() {
    let obsArr = [];
    for (let i = 1; i < 50; i++) {
      // obsArr.push(this.http.get(`http://pokeapi.co/api/v2/pokemon/${i}/`).map(res => res.json()));

      //Observable.forkJoin(...obsArr).subscribe(pokemon => console.log(pokemon));
    }
  }
}
