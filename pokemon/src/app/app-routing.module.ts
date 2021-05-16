import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';

export const routes: Routes = [
  {path:'', redirectTo:'usermain', pathMatch:"full"},
  { path: 'pokemon', loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'usermain', loadChildren: () => import('./user/usermain/usermain.module').then(m => m.UsermainModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy:PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
