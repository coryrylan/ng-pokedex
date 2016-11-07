import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Pokemon } from './../shared/interfaces/pokemon';
import { PokemonService } from './../shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemon: Observable<Pokemon[]>;

  constructor(private router: Router, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemon = this.pokemonService.pokemon;
    this.pokemonService.loadAll();
  }

  routeClick(id, e: Event) {
    this.router.navigateByUrl(`/pokemon(id:${id})`);
    e.preventDefault();
  }
}
