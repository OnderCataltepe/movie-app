import Image from 'next/image';
import logo from '../../public/logo.png';

const Logo = () => {
  return (
    <div className="absolute top-2/4 left-2/4 z-50 flex -translate-x-2/4 -translate-y-2/4 items-center">
      <Image className="w-10 md:w-12" src={logo} alt="logo" />
      <p className="select-none p-0 text-2xl font-bold text-white md:text-3xl">NUBI</p>
    </div>
  );
};

export default Logo;
