"use client";

import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollFloat.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ScrollFloat = ({
  children,
  scrollContainerRef = null,
  containerClassName = '',
  textClassName = '',
  animationDuration = 0.6,
  ease = 'power3.out',
  scrollStart = 'top 95%',
  scrollEnd = 'bottom 20%',
  stagger = 0.03
}) => {
  const containerRef = useRef(null);
  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    const tokens = text.split(/(\s+)/);

    return tokens.map((token, tokenIndex) => {
      if (/^\s+$/.test(token)) {
        return (
          <span className="space" key={`s-${tokenIndex}`}>
            {token.replace(/\s/g, '\u00A0')}
          </span>
        );
      }

      return (
        <span className="word" key={`w-${tokenIndex}`}>
          {token.split('').map((char, charIndex) => (
            <span className="char" key={`${tokenIndex}-${charIndex}`}>
              {char}
            </span>
          ))}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
    const charElements = el.querySelectorAll('.char');
    const tween = gsap.fromTo(
      charElements,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        yPercent: 60,
        scaleY: 1.3,
        scaleX: 0.95,
        transformOrigin: '50% 0%'
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          toggleActions: 'play none none reverse'
        }
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <h2 ref={containerRef} className={`scroll-float py-6 ${containerClassName}`}>
      <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>
    </h2>
  );
};

export default ScrollFloat;
