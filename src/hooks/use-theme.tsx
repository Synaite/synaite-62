
import { useLayoutEffect } from "react";

export type Theme = "light";

export function useTheme(): [Theme, (theme: Theme) => void] {
  const theme: Theme = "light";

  useLayoutEffect(() => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }, []);

  const setTheme = () => {
    // No-op function to maintain type signature
  };

  return [theme, setTheme];
}
