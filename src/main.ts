import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

console.warn(`Application is starting`);

bootstrapApplication(AppComponent, appConfig)
  .then(() => console.warn('Application is running'))
  .catch((err) => console.error(err));
