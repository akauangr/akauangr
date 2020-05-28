import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  public updateAvailable: boolean = false;

  constructor(
    private swUpdate: SwUpdate,
  ) {

    if (!this.swUpdate.isEnabled) {
      console.warn('SW Indisponível.');
    } else {
      console.info('SW Registrado.');
    }

    this.swUpdate.available.subscribe(evt => {
      this.updateAvailable = true;
      console.log('Atualizando...');
      this.swUpdate.activateUpdate();
      window.location.reload();
    });
  }
}