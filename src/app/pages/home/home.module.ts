import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeCanvasComponent } from './home-canvas/home-canvas.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeCanvasComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
