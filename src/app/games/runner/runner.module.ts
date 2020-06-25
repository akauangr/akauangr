import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunnerComponent } from './runner.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RunnerComponent,],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    RunnerComponent,
  ],
  entryComponents: [
    RunnerComponent,
  ]
})
export class RunnerModule { }
