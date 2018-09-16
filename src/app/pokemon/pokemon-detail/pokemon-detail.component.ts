import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map, distinctUntilChanged, mergeMap, tap } from 'rxjs/operators';

import { Pokemon } from './../../common/interfaces/pokemon';
import { PokemonDataService } from './../../common/services/pokemon-data.service';

export enum MODAL_KEYS {
  RIGHT_ARROW = 37,
  LEFT_ARROW = 39
}

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit, OnDestroy {
  pokemon: Observable<Pokemon>;
  show = true;

  constructor(
    private title: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private pokemonDataService: PokemonDataService) { }

  ngOnInit() {
    this.pokemon = this.activatedRoute.params
      .pipe(
        distinctUntilChanged(),
        mergeMap(params => this.pokemonDataService.pokemon.pipe(map(pokemon => pokemon.find(p => p.id === +params.id)))),
        tap(pokemon => this.title.setTitle(`Pokémon #${pokemon.id} ${pokemon.name}`))
      );
  }

  ngOnDestroy() {
    this.title.setTitle('Search for Pokémon');
  }

  close(show: boolean) {
    if (!show) {
      this.router.navigateByUrl('/pokemon');
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event) {
    if (event.keyCode === MODAL_KEYS.RIGHT_ARROW) {
      const paramId = +this.activatedRoute.snapshot.params.id;
      const id = paramId === 1 ? 151 : paramId - 1;
      this.router.navigateByUrl(`/pokemon/${id}`);
    }

    if (event.keyCode === MODAL_KEYS.LEFT_ARROW) {
      const paramId = +this.activatedRoute.snapshot.params.id;
      const id = paramId < 151 ? paramId + 1 : 1;
      this.router.navigateByUrl(`/pokemon/${id}`);
    }
  }
}
