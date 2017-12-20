import { Component, EventEmitter, HostListener, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { trigger } from '@angular/animations';

import { ViewportService } from './../../../core/services/viewport.service';

export enum MODAL_KEYS {
  ESCAPE = 27,
  RIGHT_ARROW = 37,
  LEFT_ARROW = 39
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() visible;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  constructor(private viewportService: ViewportService) { }

  ngOnInit() {
    this.viewportService.lockScroll();
  }

  ngOnDestroy() {
    this.viewportService.unlockScroll();
  }

  close() {
    this.visibleChange.next(false);
    this.visible = false;
    this.viewportService.unlockScroll();
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event) {
    if (event.keyCode === MODAL_KEYS.ESCAPE) {
      this.close();
    }

    if (event.keyCode === MODAL_KEYS.RIGHT_ARROW) {
      this.next.emit();
    }

    if (event.keyCode === MODAL_KEYS.LEFT_ARROW) {
      this.previous.next();
    }
  }
}
