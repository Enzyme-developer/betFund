"use client";
import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useMemo,
  ReactNode,
} from "react";

/**
 * @param {string} theme - Name of current theme
 * @return {string | undefined} previousTheme
 */
function usePrevious(theme: string): string | undefined {
  const ref = useRef<string | undefined>();
  useEffect(() => {
    ref.current = theme;
  });
  return ref.current;
}

/**
 * Gets user preferences from local storage
 * @param {string} key - localStorage key
 * @return {[string, React.Dispatch<React.SetStateAction<string>>]} getter and setter for user preferred theme
 */
function useStorageTheme(
  key: string
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const userPreference =
    !!window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useState<string>(
    localStorage.getItem(key) || (userPreference ? "dark" : "light")
  );

  useEffect(() => {
    localStorage.setItem(key, theme);
  }, [theme, key]);

  return [theme, setTheme];
}

// create context
export const ThemeContext = React.createContext<{
  theme: string;
  toggleTheme: () => void;
}>({ theme: "light", toggleTheme: () => {} });

// create context provider
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useStorageTheme("theme");

  // update root element class on theme change
  const oldTheme = usePrevious(theme);
  useLayoutEffect(() => {
    if (oldTheme) {
      document.documentElement.classList.remove(`theme-${oldTheme}`);
    }
    document.documentElement.classList.add(`theme-${theme}`);
  }, [theme, oldTheme]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
