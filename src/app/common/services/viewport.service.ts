import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewportService {
  constructor() { }

  lockScroll() {
    // Temp until I can figure out the native renderer
    if (document) {
      const scrollDiv = document.createElement('div');
      scrollDiv.className = 'scrollbar-measure';
      document.body.appendChild(scrollDiv);
      const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = scrollbarWidth + 'px';
    }
  }

  unlockScroll() {
    if (document) {
      document.body.style.overflow = 'initial';
      document.body.style.paddingRight = '0px';
    }
  }
}
