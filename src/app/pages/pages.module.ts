import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,

    HomeModule,
  ],
})
export class PagesModule {
}
