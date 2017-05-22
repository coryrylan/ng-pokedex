import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './common/core/core.module';
import { SharedModule } from './common/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';
import { PokemonModalComponent } from './pokemon/pokemon-modal/pokemon-modal.component';

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
    CoreModule.forRoot(),
    SharedModule,
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
