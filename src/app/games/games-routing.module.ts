import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { GamesComponent } from './games.component';
import { RunnerComponent } from './runner/runner.component';

const routes: Routes = [{
  path: '',
  component: GamesComponent,
  children: [
    {
      path: 'runner',
      component: RunnerComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {
}
