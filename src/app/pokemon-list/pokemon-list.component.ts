import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { Pokemon } from './../shared/interfaces/pokemon';
import { PokemonService } from './../shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  searchForm: FormGroup;
  pokemon: Pokemon[];

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

    this.pokemonService.pokemon.subscribe(pokemon => {
      let _pokemon = pokemon;
      this.pokemon = _pokemon;

      this.searchForm.controls['search'].valueChanges.subscribe(value => {
        if (value.length) {
          this.pokemon = _pokemon.filter(p => p.name.toLowerCase().includes(value.toLowerCase()));
        } else {
          this.pokemon = _pokemon;
        }
      });
    });
  }

  submit() { }
}
