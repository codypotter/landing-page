import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import version from '../../package.json';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'landing-page';

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;

  constructor() {
    console.trace('AppComponent constructor with version', version);
  }
}
