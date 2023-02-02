import MobilMenu from '../ui/menu/MobilMenu';
import LargeMenu from '../ui/menu/LargeMenu';
const Navbar = () => {
  return (
    <nav className="flex">
      <LargeMenu />
      <MobilMenu />
    </nav>
  );
};

export default Navbar;
