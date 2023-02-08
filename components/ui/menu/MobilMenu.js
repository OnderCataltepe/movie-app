import HamburgerButton from '../buttons/HamburgerButton';
import MobilMenuItem from './MobilMenuItem';
import { useMediaQuery } from '../../../hooks/media';
import { MENU_DATA } from '../../../constants';
import { BREAKPOINTS } from '../../../constants';
import { useState } from 'react';

const MobilMenu = () => {
  const isBreakpoint = useMediaQuery(BREAKPOINTS.medium);
  const [openMenu, setOpenMenu] = useState(false);
  if (!isBreakpoint) {
    return null;
  }
  return (
    <>
      <HamburgerButton open={openMenu} setOpenMenu={setOpenMenu} />

      {openMenu && (
        <div className="relative block overflow-y-visible">
          <div className="absolute top-[-27px] left-[-42px] h-screen w-screen animate-leftToRight flex-col overflow-y-auto bg-blueSky py-16 px-5 dark:bg-blackSky">
            {MENU_DATA.map((item, index) => (
              <MobilMenuItem setOpenMenu={setOpenMenu} key={index} item={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MobilMenu;
