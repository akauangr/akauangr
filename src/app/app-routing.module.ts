import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module')
    .then(m => m.PagesModule),
  },
  // {
  //   path: 'games',
  //   loadChildren: () => import('./games/games.module')
  //     .then(m => m.GamesModule),
  // },
  { path: '**', redirectTo: '' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }