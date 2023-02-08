import Image from 'next/image';
import { BsCalendar3 } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { useRouter } from 'next/router';
import noImg from '../../../public/noImg.png';
const MovieCard = ({ item, isSwiper = false }) => {
  const router = useRouter();
  const date = new Date(item.release_date);
  const year = date.getFullYear();
  return (
    <div
      className="group relative my-2 w-full cursor-pointer overflow-hidden "
      onClick={() => router.push(`/movie/${item.id}`)}>
      <Image
        width={100}
        height={150}
        className="h-auto w-full duration-700 hover:scale-105"
        alt={`${item.title}`}
        src={item.poster_path ? `https://image.tmdb.org/t/p/original${item.poster_path}` : noImg}
      />

      <div className="absolute bottom-0 hidden h-1/2 w-full flex-col justify-end bg-gradient-to-t from-black p-2 group-hover:flex">
        <p className="break-words text-sm font-bold text-white md:text-base">{item.title}</p>
        <div className="flex justify-between">
          <p className="flex items-center break-words text-xs text-white md:text-sm">
            <AiFillStar className="mr-1 text-yellow-500" />
            <span>{item.vote_average} </span> /10
          </p>
          <p className="flex items-center break-words text-xs text-white  md:text-sm">
            <BsCalendar3 className="mr-1 text-green-600" />
            <span> {year}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
