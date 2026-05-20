'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import SplashCursor from "./SplashCursor";

export default function SplashCursorWrapper() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // The requested color for dark mode is #78717e.
  // For light mode, we use #4A6B8E which is the global accent color to keep consistency.
  const cursorColor = resolvedTheme === 'dark' ? '#78717e' : '#4A6B8E';

  return (
    <SplashCursor
      key={resolvedTheme} // Forces full remount on theme change to prevent WebGL context leaks
      DENSITY_DISSIPATION={2.5}
      VELOCITY_DISSIPATION={0.5}
      PRESSURE={0.05}
      CURL={1}
      SPLAT_RADIUS={0.02}
      SPLAT_FORCE={2000}
      COLOR_UPDATE_SPEED={12}
      SHADING
      RAINBOW_MODE={false}
      COLOR={cursorColor}
    />
  );
}
