import { BsCalendar3 } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { useRouter } from 'next/router';

const LargeMovieCard = ({ item }) => {
  const router = useRouter();

  return (
    <div className="relative cursor-pointer" onClick={() => router.push(`/movie/${item.id}`)}>
      <img
        className="h-auto w-full  "
        alt={item.title}
        src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
      />
      <div className="absolute top-0 left-0 h-1/4 w-full bg-gradient-to-b from-black p-2 dark:from-black md:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <AiFillStar className="mr-1 text-xl text-yellow-500 md:text-3xl" />
            <div className="text-xs text-white dark:text-gray-300 md:text-base">
              <p className="break-keep">{item.vote_average.toPrecision(2)}/10</p>
              <p>{item.vote_count} vote</p>
            </div>
          </div>
          <h1 className="font-merriweather text-base font-bold tracking-wider text-white dark:text-gray-300 md:text-3xl">
            {item.title}
          </h1>
          <div>
            <p className="flex items-center  text-xs text-white dark:text-gray-300 md:text-base">
              <BsCalendar3 className="mr-1 text-green-900" /> <span>{item.release_date}</span>{' '}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 flex h-1/2 w-full  items-end justify-between bg-gradient-to-t  from-black p-2 font-lato dark:from-black md:h-1/3 md:p-4">
        <p className="flex h-3/4 items-end overflow-hidden text-xs text-white dark:text-gray-300 md:text-base">
          {item.overview.slice(0, 250)}...
        </p>
      </div>
    </div>
  );
};

export default LargeMovieCard;
