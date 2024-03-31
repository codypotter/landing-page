import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { NgxParticlesModule, NgParticlesService } from '@tsparticles/angular';
import { Container, IOptions, RecursivePartial } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { version } from '../../package.json';
import { ParticlesConfigService } from './particles-config.service';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, NgxParticlesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])
  ]
})
export class AppComponent implements AfterViewInit {
  title = 'landing-page';

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;

  particlesOptions: RecursivePartial<IOptions>;
  particlesReady = false;

  constructor(
    private particlesConfigService: ParticlesConfigService,
    private readonly ngParticlesService: NgParticlesService,
  ) {
    console.warn('AppComponent constructor with version', version);
    this.particlesOptions = this.particlesConfigService.getConfig();
  }

  ngAfterViewInit(): void {
    console.warn('AppComponent ngAfterViewInit');
    this.ngParticlesService.init(async (engine) => {
      console.warn(engine);
      await loadSlim(engine).then(() => {
        this.particlesReady = true;
      }).catch((e) => console.error(e));
    })
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }
}
