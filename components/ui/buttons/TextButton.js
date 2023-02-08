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
        className=" mx-2 rounded-2xl border-2 py-1 px-2 font-bold text-white transition-all hover:border-amber-500 hover:text-amber-500 dark:border-gray-400 dark:text-gray-400 hover:dark:border-red-700 hover:dark:text-red-700">
        {text}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className=" mx-2 rounded-2xl border-2 py-1 px-2 dark:border-gray-400 dark:text-gray-400 dark:hover:border-white dark:hover:text-white">
      {text}
    </button>
  );
};
export default TextButton;
