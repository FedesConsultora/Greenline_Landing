import { useLayoutEffect, useRef } from 'react';
import { setupGsap, gsap } from '../lib/gsap/setupGsap';

/** Crea un gsap.context scoping al ref y lo revierte al desmontar. */
export function useGsapContext() {
  setupGsap();
  const rootRef = useRef(null);
  const ctxRef = useRef(null);

  useLayoutEffect(() => {
    ctxRef.current = gsap.context(() => {}, rootRef);
    return () => ctxRef.current && ctxRef.current.revert();
  }, []);

  return { ref: rootRef, ctx: ctxRef };
}
