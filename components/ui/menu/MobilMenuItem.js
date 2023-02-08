import Link from 'next/link';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { useState } from 'react';

const MobilMenuItem = ({ item, setOpenMenu }) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  return (
    <div className="group relative mx-1 w-3/5 flex-col items-center justify-between px-1 py-4">
      <div className="flex items-center justify-between ">
        {item.path !== '' ? (
          <Link
            onClick={() => setOpenMenu(false)}
            className="font-josefin font-bold tracking-wider text-white transition-all hover:text-amber-500 dark:text-white hover:dark:text-red-700"
            href={item.path}>
            {item.title}
          </Link>
        ) : (
          <p
            onClick={() => setOpenSubMenu((prev) => !prev)}
            className="cursor-pointer select-none font-josefin font-bold tracking-wider text-white transition-all hover:text-amber-500 dark:text-white hover:dark:text-red-700">
            {item.title}
          </p>
        )}
        {item.children &&
          (openSubMenu ? (
            <AiOutlineMinus
              onClick={() => setOpenSubMenu((prev) => !prev)}
              className="cursor-pointer text-2xl font-bold  text-white transition-all hover:text-amber-500 dark:text-white hover:dark:text-red-700"
            />
          ) : (
            <AiOutlinePlus
              className="cursor-pointer text-2xl font-bold  text-white transition-all hover:text-amber-500 dark:text-white hover:dark:text-red-700"
              onClick={() => setOpenSubMenu((prev) => !prev)}
            />
          ))}
      </div>

      {item.children && (
        <>
          {openSubMenu && (
            <div className="p-4">
              <ul>
                {item.children.map((subItem, index) => (
                  <li key={index}>
                    <Link
                      onClick={() => setOpenMenu(false)}
                      className="dark:border-text-white block border-l-2 py-4 px-3 font-josefin font-bold tracking-wider text-white transition-all hover:border-l-amber-500 hover:text-amber-500 dark:text-white hover:dark:border-l-red-700 hover:dark:text-red-700"
                      href={subItem.path}>
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MobilMenuItem;
