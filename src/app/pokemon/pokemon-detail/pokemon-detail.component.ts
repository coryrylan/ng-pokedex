import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';

import { Pokemon } from './../../common/interfaces/pokemon';
import { PokemonService } from './../../common/core/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit, OnDestroy {
  pokemon: Observable<Pokemon>;

  constructor(
    private title: Title,
    private router: ActivatedRoute,
    private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemon = this.router.params.distinctUntilChanged()
      .mergeMap(params => this.pokemonService.pokemon.map(pokemon => pokemon.find(p => p.id === +params.id)))
      .do(pokemon => this.title.setTitle(`Pokémon #${pokemon.id} ${pokemon.name}`));
  }

  ngOnDestroy() {
    this.title.setTitle('Search for Pokémon');
  }
}
