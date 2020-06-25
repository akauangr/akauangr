import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunnerComponent } from './runner.component';
import { Runner } from 'protractor';

@NgModule({
  declarations: [RunnerComponent],
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
