import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PokemonService } from './shared/services/pokemon.service';
import { ViewportService } from './shared/services/viewport.service';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HomeComponent } from './home/home.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { AboutComponent } from './about/about.component';
import { PokemonModalComponent } from './pokemon-modal/pokemon-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    HomeComponent,
    PokemonDetailComponent,
    AboutComponent,
    PokemonModalComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    PokemonService,
    ViewportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
