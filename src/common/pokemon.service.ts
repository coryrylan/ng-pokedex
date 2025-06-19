import { Injectable } from '@angular/core';
import { Pokemon } from './types';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor() {}

  async getPokemon() {
    const pokemon = (await import('./data.json', { assert: { type: 'json' } })).default as unknown as Pokemon[];
    return pokemon.map(p => ({
      ...p,
      height: p.height / 10,
      weight: p.weight / 10
    }));
  }
}
