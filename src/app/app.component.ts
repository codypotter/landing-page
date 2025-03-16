import { AfterViewInit, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { NgxParticlesModule, NgParticlesService } from '@tsparticles/angular';
import { IOptions, RecursivePartial } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { version } from '../../package.json';
import { ParticlesConfigService } from './particles-config.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    imports: [CommonModule, FontAwesomeModule, NgxParticlesModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'landing-page';

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;

  particlesOptions: RecursivePartial<IOptions>;

  constructor(
    private particlesConfigService: ParticlesConfigService,
    private readonly ngParticlesService: NgParticlesService,
  ) {
    console.trace('AppComponent constructor with version', version);
    this.particlesOptions = this.particlesConfigService.getConfig();
  }

  ngAfterViewInit(): void {
    console.trace('AppComponent ngAfterViewInit');
    this.ngParticlesService.init(async (engine) => {
      console.trace('engine', engine);
      await loadSlim(engine).then(() => {
        const particlesElement = document.querySelector('.particles') as HTMLElement;
        if (particlesElement) {
          particlesElement.style.display = 'block';
        }
      }).catch((e) => console.error(e));
    })
  }
}
