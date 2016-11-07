import { Component, OnInit, OnDestroy, trigger } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { AnimationService } from '../shared/services/animation.service';

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: 'pokemon-modal.component.html',
  styleUrls: ['pokemon-modal.component.scss'],
  animations: [ trigger('modal', AnimationService.fadeIn) ]
})
export class PokemonModalComponent implements OnInit, OnDestroy {
  routeSub: any;
  disableBodyScoll = true;
  id: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
    });

    // Temp until I can figure out the naitive renderer
    if (document) {
      document.body.style.overflow = 'hidden';
    }
  }

  ngOnDestroy() {
    this.disableBodyScoll = false;
    this.routeSub.unsubscribe();

    if (document) {
      document.body.style.overflow = 'initial';
    }
  }

  close() {
    this.router.navigateByUrl('/pokemon');
  }
}