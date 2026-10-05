"use client";

import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { followSystemTheme, setTheme, useTheme } from "@/lib/theme";

/** Sun / moon switch in the navigation bar. */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useTheme();
  const dark = theme === "dark";

  useEffect(() => followSystemTheme(), []);

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      title={dark ? "Light mode" : "Dark mode"}
      className={`relative grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-current/20 transition-colors duration-500 hover:border-current/50 ${className}`}
    >
      <Sun
        size={17}
        aria-hidden="true"
        className={`absolute transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${dark ? "translate-y-0 rotate-0 opacity-100" : "translate-y-6 -rotate-90 opacity-0"}`}
      />
      <Moon
        size={17}
        aria-hidden="true"
        className={`absolute transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${dark ? "-translate-y-6 rotate-90 opacity-0" : "translate-y-0 rotate-0 opacity-100"}`}
      />
    </button>
  );
}
