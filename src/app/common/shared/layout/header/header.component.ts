import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navOpen = false;
  constructor() { }

  ngOnInit() {
    this.selector('.menu').addEventListener('click', () => {
      this.selector('header').classList.toggle('side-bar-height');
      this.selector('.menu').classList.toggle('open');
      this.selector('header').classList.toggle('open');
      this.selector('.overlay').classList.toggle('open');
    });
  }

  selector(s) {
    return document.querySelector(s);
  }
}
