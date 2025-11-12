// src/lib/gsap/setupGsap.js
import { gsap as _gsap } from 'gsap';
import { ScrollTrigger as _ScrollTrigger } from 'gsap/ScrollTrigger';

let didRegister = false;

export function setupGsap() {
  if (!didRegister) {
    _gsap.registerPlugin(_ScrollTrigger);
    didRegister = true;
  }
  _ScrollTrigger.defaults({ scroller: window });
}

export const gsap = _gsap;
export const ScrollTrigger = _ScrollTrigger;
