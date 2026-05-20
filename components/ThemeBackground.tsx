"use client";

import { useTheme } from "next-themes";
import Particles from "./Particles";
import { useEffect, useState } from "react";

export default function ThemeBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (resolvedTheme === "light") {
    return (
      <Particles
        particleColors={["#111111"]}
        particleCount={400}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover
        alphaParticles
        disableRotation={false}
        pixelRatio={1}
        className="fixed inset-0 pointer-events-none z-0"
      />
    );
  } else if (resolvedTheme === "dark") {
    return (
      <Particles
        particleColors={["#ffffff"]}
        particleCount={400}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover
        alphaParticles
        disableRotation={false}
        pixelRatio={1}
        className="fixed inset-0 pointer-events-none z-0"
      />
    );
  }

  return null;
}
