const Overview = ({ overview }) => {
  return (
    <div className="w-full">
      <p className="flex items-start p-0 text-white dark:text-gray-400 md:text-2xl">
        Overview:{' '}
        <span className="ml-2 font-josefin text-sm font-bold text-slate-900 dark:text-white md:text-base">
          {overview}
        </span>
      </p>
    </div>
  );
};

export default Overview;
