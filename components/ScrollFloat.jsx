"use client";

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import './ScrollFloat.css';

const ScrollFloat = ({
  children,
  scrollContainerRef = null,
  containerClassName = '',
  textClassName = '',
  animationDuration = 0.6,
  ease = [0.16, 1, 0.3, 1], // Custom cubic-bezier matching power3.out
  scrollStart = 'top 95%', // Note: framer-motion useInView uses margin, we'll use viewport prop
  scrollEnd = 'bottom 20%',
  stagger = 0.03
}) => {
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
        <span className="word" key={`w-${tokenIndex}`} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {token.split('').map((char, charIndex) => (
            <motion.span
              key={`${tokenIndex}-${charIndex}`}
              className="char"
              variants={{
                hidden: { opacity: 0, y: "60%", scaleY: 1.3, scaleX: 0.95 },
                visible: { opacity: 1, y: 0, scaleY: 1, scaleX: 1 }
              }}
              transition={{ duration: animationDuration, ease }}
              style={{ display: 'inline-block', transformOrigin: '50% 0%' }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      );
    });
  }, [children, animationDuration, ease]);

  return (
    <motion.h2
      className={`scroll-float py-6 ${containerClassName}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: stagger
          }
        }
      }}
    >
      <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>
    </motion.h2>
  );
};

export default ScrollFloat;
