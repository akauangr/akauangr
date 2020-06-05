import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeCanvasComponent } from './home-canvas/home-canvas.component';
import { BrowserModule } from '@angular/platform-browser';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { CommonModule } from '@angular/common';
import { ParticlesModule } from 'angular-particle';
import { DirectivesModule } from 'src/app/@core/directives/directives.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeCanvasComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    DirectivesModule,

    ParticlesModule,
  ],
})
export class HomeModule { }
