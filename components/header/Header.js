import ThemeButton from '../ui/buttons/ThemeButton';
import Logo from './Logo';
import Navbar from '../navbar/Navbar';
import Searching from '../forms/Searching';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full bg-sky-700 bg-opacity-70 dark:bg-black dark:bg-opacity-70">
      <div className=" relative flex w-full items-center justify-between p-4 md:py-0">
        <Navbar />
        <Logo />
        <div className="z-50 flex items-center p-0">
          <Searching />
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
