import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { NgParticlesService, NgxParticlesModule } from '@tsparticles/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(NgxParticlesModule, BrowserAnimationsModule),
    NgParticlesService,
  ]
};
