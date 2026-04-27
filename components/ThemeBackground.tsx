"use client";

import { useTheme } from "next-themes";
import Particles from "./Particles";
import { useEffect, useState } from "react";

export default function ThemeBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (resolvedTheme === "light") {
    return (
      <Particles
        particleColors={["#111111", "#444444", "#666666"]}
        particleCount={180}
        particleSpread={10}
        speed={0.04}
        particleBaseSize={70}
        moveParticlesOnHover={false}
        alphaParticles={true}
        sizeRandomness={1.2}
        disableRotation={false}
        enableParallax={true}
        parallaxStrength={0.06}
        className="fixed inset-0 pointer-events-none z-[-1]"
      />
    );
  } else if (resolvedTheme === "dark") {
    return (
      <Particles
        particleColors={["#ffffff", "#cccccc", "#aaaaaa"]}
        particleCount={190}
        particleSpread={10}
        speed={0.05}
        particleBaseSize={90}
        moveParticlesOnHover={false}
        alphaParticles={true}
        sizeRandomness={1.2}
        disableRotation={false}
        enableParallax={true}
        parallaxStrength={0.08}
        className="fixed inset-0 pointer-events-none z-[-1]"
      />
    );
  }

  return null;
}
