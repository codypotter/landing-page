import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { NgParticlesService, NgxParticlesModule } from '@tsparticles/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(NgxParticlesModule),
    NgParticlesService,
  ]
};
