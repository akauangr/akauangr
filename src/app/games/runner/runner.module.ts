import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunnerComponent } from './runner.component';

@NgModule({
  declarations: [
    RunnerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RunnerComponent,
  ],
  entryComponents: [
    RunnerComponent,
  ]
})
export class RunnerModule { }
