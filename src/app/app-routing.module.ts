import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: './pokemon/pokemon.module#PokemonModule' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
