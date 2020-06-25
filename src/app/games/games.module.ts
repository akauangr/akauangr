import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { GamesRoutingModule } from './games-routing.module';
import { RunnerModule } from './runner/runner.module';

@NgModule({
  declarations: [GamesComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,

    // Games
    RunnerModule,
  ]
})
export class GamesModule { }
