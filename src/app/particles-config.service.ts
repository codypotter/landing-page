import { Injectable } from '@angular/core';
import { WindowService } from './window.service';
import { MoveDirection, OutMode } from '@tsparticles/engine';

@Injectable({
  providedIn: 'root'
})
export class ParticlesConfigService {

  constructor(private windowService: WindowService) { }

  getConfig() {
    const isLightMode = this.windowService.nativeWindow.matchMedia && this.windowService.nativeWindow.matchMedia('(prefers-color-scheme: light)').matches;
    const linkColor = isLightMode ? '#777' : '#777';
    return {
      fpsLimit: 120,
      interactivity: {
        events: {
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
            duration: 0.1,
          },
        },
      },
      particles: {
        color: {
          value: linkColor,
          random: true,
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
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            width: 800,
            height: 800,
          },
          value: 20,
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
    }
  }
}
