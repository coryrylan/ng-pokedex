import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/distinctUntilChanged';

import { Pokemon } from './../shared/interfaces/pokemon';
import { PokemonService } from './../shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Observable<Pokemon>;

  constructor(
    private router: ActivatedRoute,
    private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemon = this.router.params.distinctUntilChanged().mergeMap(params => {
      return this.pokemonService.pokemon.map(pokemon => pokemon.find(p => p.id === +params['id']));
    });
  }
}
