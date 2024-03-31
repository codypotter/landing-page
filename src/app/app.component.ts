import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { NgxParticlesModule, NgParticlesService } from '@tsparticles/angular';
import { Container, IOptions, MoveDirection, OutMode, RecursivePartial } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, NgxParticlesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'landing-page';

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;

  particlesOptions: RecursivePartial<IOptions>;

  constructor(private readonly ngParticlesService: NgParticlesService) {
    const isLightMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    const linkColor = isLightMode ? '#000000' : '#ffffff';
    this.particlesOptions = {
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: linkColor,
        },
        links: {
          color: linkColor,
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.bounce,
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            width: 800,
            height: 800,
          },
          value: 40,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    };
  }

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {
      console.log(engine);

      await loadSlim(engine);
    })
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }
}
