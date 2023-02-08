import Link from 'next/link';
import { MdKeyboardArrowDown } from 'react-icons/md';

const MenuItem = ({ item }) => {
  return (
    <div className="group mx-1 hidden bg-inherit px-1 py-4 filter md:flex">
      {item.path !== '' ? (
        <Link
          className="flex items-end font-josefin font-bold tracking-wider text-white transition-all hover:text-amber-500 dark:text-white hover:dark:text-red-700"
          href={item.path}>
          {item.title}
        </Link>
      ) : (
        <p className="flex cursor-pointer select-none items-end font-josefin font-bold tracking-wider text-white transition-all hover:text-amber-500 dark:text-white hover:dark:text-red-700">
          {item.title} {item.children && <MdKeyboardArrowDown className="ml-1 h-6 w-5" />}
        </p>
      )}

      {item.children && (
        <div className="absolute top-full left-0 hidden w-full bg-sky-700 bg-opacity-70 group-hover:block dark:bg-black dark:bg-opacity-70">
          <ul className="flex w-full flex-wrap">
            {item.children.map((subItem, index) => (
              <li key={index} className="p-2">
                <Link
                  className="dark:border-text-white block border-t-2 bg-inherit py-1 px-3 font-josefin font-bold tracking-wider text-white  transition-all hover:border-t-amber-500 hover:text-amber-500 dark:text-white hover:dark:border-t-red-700 hover:dark:text-red-700"
                  href={subItem.path}>
                  {subItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
