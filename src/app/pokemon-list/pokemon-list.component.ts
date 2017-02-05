import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';

import { Pokemon } from './../shared/interfaces/pokemon';
import { PokemonService } from './../shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  searchForm: FormGroup;
  pokemon: Observable<Pokemon[]>;

  constructor(
    private title: Title,
    private router: Router,
    private formBuilder: FormBuilder,
    private pokemonService: PokemonService) { }

  ngOnInit() {
    this.title.setTitle('Search for Pokémon');
    this.searchForm = this.formBuilder.group({
      search: ['']
    });

    this.pokemon = this.pokemonService.pokemon.switchMap(pokemon =>
      this.searchForm.controls['search'].valueChanges
        .map(value => this.search(pokemon, value))
        .startWith(pokemon));
  }

  private search(pokemon: Pokemon[], value: string) {
    return pokemon.filter(p => value ? p.name.toLowerCase().includes(value.toLowerCase()) : pokemon);
  }
}
