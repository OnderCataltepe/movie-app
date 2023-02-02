import Image from 'next/image';
import { BsCalendar3 } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';

const MovieCard = ({ title, voteAverage, voteCount, movieId, image, releaseDate }) => {
  const date = new Date(releaseDate);
  const year = date.getFullYear();
  return (
    <div className="group relative my-2 w-52 cursor-pointer overflow-hidden  ">
      <Image
        width={200}
        style={{ width: '100%', height: 'auto' }}
        height={300}
        className="duration-700 hover:scale-105 "
        alt={`${title}`}
        src={`https://image.tmdb.org/t/p/original${image}`}
      />
      <div className="absolute bottom-0 hidden h-1/2 w-full flex-col justify-end bg-gradient-to-t from-black p-2 group-hover:flex">
        <p className="break-words font-bold text-white">{title}</p>
        <div className="flex justify-between">
          <p className="flex items-center break-words text-white">
            <AiFillStar className="mr-1 text-yellow-500" />
            <span>{voteAverage} </span> /10
          </p>
          <p className="flex items-center break-words  text-white">
            <BsCalendar3 className="mr-1 text-green-600" />
            <span> {year}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
