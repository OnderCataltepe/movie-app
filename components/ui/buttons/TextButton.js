import Link from 'next/link';

const TextButton = ({ text, onClick, size, href }) => {
  const sizes = {
    large: 'md:text-3xl text-2xl',
    xlarge: 'md:text-5xl text-3xl'
  };
  if (href) {
    return (
      <Link
        href={href}
        className="mx-1 rounded-2xl border-2 py-1 px-2 text-sm font-bold text-white transition-all hover:border-amber-500 hover:text-amber-500 dark:border-gray-400 dark:text-gray-400 hover:dark:border-red-700 hover:dark:text-red-700 md:mx-2 md:text-lg">
        {text}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="mx-1 rounded-2xl border-2 py-1 px-2 text-sm dark:border-gray-400 dark:text-gray-400 dark:hover:border-white dark:hover:text-white md:mx-2 md:text-xl">
      {text}
    </button>
  );
};
export default TextButton;
