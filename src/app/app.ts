import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { signal } from '@angular/core';
import { Pokemon } from '../common/types';
import { PokemonService } from '../common/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [CommonModule]
})
export class App {
  #pokemonService = inject(PokemonService);
  #pokemon = signal<Pokemon[]>([]);
  protected filteredPokemon = signal<Pokemon[]>([]);
  protected activePokemon = signal<Pokemon | null>(null);

  async ngOnInit() {
    this.#pokemon.set(await this.#pokemonService.getPokemon());
    this.filteredPokemon.set(this.#pokemon());
  }

  protected search(event: Event) {
    const term = (event.target as HTMLInputElement).value;
    const filtered = this.#pokemon().filter(p => term ? p.name.toLowerCase().includes(term.toLowerCase()) : this.#pokemon());
    this.filteredPokemon.set(filtered);
  }
}
