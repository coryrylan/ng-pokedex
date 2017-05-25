import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => registerServiceWorker());

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(function (reg) {
      reg.onupdatefound = function () {
        const installingWorker = reg.installing;

        installingWorker.onstatechange = function () {
          switch (installingWorker.state) {
            case 'installed':
              if (navigator.serviceWorker.controller) {
                console.log('New or updated content is available.');
              } else {
                console.log('Content is now available offline!');
              }
              break;

            case 'redundant':
              console.error('The installing service worker became redundant.');
              break;
          }
        };
      };
    }).catch(function (e) {
      console.error('Error during service worker registration:', e);
    });
  }
}
