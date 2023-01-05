import { useState, useEffect } from 'react';

enum Theme {
  light = 'light',
  dark = 'dark',
}

const getAnotherTheme = (theme: Theme) => {
  return theme === Theme.light ? Theme.dark : Theme.light;
};

const switchTheme = (newTheme: string, oldTheme?: string) => {
  if (oldTheme) {
    document.body.classList.remove(oldTheme);
  }
  document.body.classList.add(newTheme);
};

const useSwitchTheme = () => {
  const [theme, setTheme] = useState<Theme>(Theme.light);
  const toggleTheme = () => {
    setTheme(getAnotherTheme(theme));
  };
  useEffect(() => {
    switchTheme(theme, theme === 'light' ? 'dark' : 'light');
  }, [theme]);

  return toggleTheme;
};

export default useSwitchTheme;
