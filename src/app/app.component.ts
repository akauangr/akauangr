import { Component } from '@angular/core';
import { UpdateService } from './@core/update.service';
import { NavigationEnd, Router } from '@angular/router';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private update: UpdateService,
    private gtmService: GoogleTagManagerService,
    private router: Router,
  ){

    this.router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          event: 'page',
          pageName: item.url
        };
        this.gtmService.pushTag(gtmTag);
      }
    });
  }
}
