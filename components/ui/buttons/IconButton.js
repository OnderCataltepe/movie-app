const IconButton = ({ children, onClick, color, size }) => {
  const colors = {
    white: 'text-white',
    whiteDark: 'text-white dark:text-black',
    black: 'text-black',
    blueDark: 'text-sky-600 dark:text-black'
  };
  const sizes = {
    large: 'md:text-3xl text-2xl',
    xlarge: 'md:text-5xl text-3xl'
  };
  return (
    <button onClick={onClick} className={`${sizes[size]} ${colors[color]}`}>
      {children}
    </button>
  );
};
export default IconButton;
