import Link from 'next/link';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

import { useState } from 'react';
const MobilMenuItem = ({ item }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="group relative mx-1 w-3/5 flex-col items-center justify-between px-1 py-4">
      <div className="flex items-center justify-between ">
        <Link
          className="font-josefin font-bold tracking-wider text-white transition-all hover:text-amber-500 dark:text-white hover:dark:text-red-700"
          href={item.path}>
          {item.title}
        </Link>
        {item.children &&
          (openMenu ? (
            <AiOutlineMinus
              onClick={() => setOpenMenu((prev) => !prev)}
              className="cursor-pointer text-2xl font-bold  text-white transition-all hover:text-amber-500 dark:text-white hover:dark:text-red-700"
            />
          ) : (
            <AiOutlinePlus
              className="cursor-pointer text-2xl font-bold  text-white transition-all hover:text-amber-500 dark:text-white hover:dark:text-red-700"
              onClick={() => setOpenMenu((prev) => !prev)}
            />
          ))}
      </div>

      {item.children && (
        <>
          {openMenu && (
            <div className="p-4">
              <ul>
                {item.children.map((subItem, index) => (
                  <li key={index}>
                    <Link
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
