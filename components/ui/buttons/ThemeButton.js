import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import yoda from '../../../public/yoda.png';
import darth from '../../../public/darth.png';

import Image from 'next/image';
const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="switcher"
        className="appearance-none outline-none"
        checked={theme === 'light' ? true : false}
        onChange={(e) => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      <label htmlFor="switcher" className="ml-1 cursor-pointer">
        <Image className="w-6 md:w-8" src={theme === 'dark' ? darth : yoda} alt="theme" />
      </label>
    </div>
  );
};

export default ThemeButton;
