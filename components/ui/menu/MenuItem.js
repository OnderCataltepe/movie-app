import Link from 'next/link';

const MenuItem = ({ item }) => {
  return (
    <div className="group relative mx-1 hidden px-1 py-4 md:flex">
      <Link
        className="flex items-end font-josefin font-bold tracking-wider text-white transition-all hover:text-amber-500 dark:text-white hover:dark:text-red-700"
        href={item.path}>
        {item.title}{' '}
        {item.children && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-1 h-6 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        )}
      </Link>
      {item.children && (
        <div className=" absolute top-full left-0 hidden group-hover:block">
          <ul>
            {item.children.map((subItem, index) => (
              <li key={index}>
                <Link
                  className="dark:border-text-white block border-l-2 py-1 px-3 font-josefin font-bold tracking-wider text-white transition-all hover:border-l-amber-500 hover:text-amber-500 dark:text-white hover:dark:border-l-red-700 hover:dark:text-red-700"
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
