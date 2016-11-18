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
  }

  @HostListener('window:keyup', ['$event'])
  outerClick(event) {
    if (event.keyCode === 27 && this.navOpen === true) {
      this.navOpen = false;
    }
  }
}
