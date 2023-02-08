import Image from 'next/image';
import { timeConvert } from '../../../utils';
import { BsPlayCircle } from 'react-icons/bs';
import { BsCalendar3 } from 'react-icons/bs';
import { BsFillClockFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import noImage from '../../../public/noImage.png';
import Trailer from '../trailer/Trailer';
import IconButton from '../../ui/buttons/IconButton';
import { useState } from 'react';

const MovieMedia = ({ item, videoData }) => {
  const duration = timeConvert(item.runtime);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="relative w-full">
      <Image
        priority
        width={1200}
        height={900}
        className="h-auto w-full  "
        alt={item.title}
        src={
          item.backdrop_path ? `https://image.tmdb.org/t/p/original${item.backdrop_path}` : noImage
        }
      />
      <div className="absolute top-0 left-0 h-1/3 w-full bg-gradient-to-b from-slate-500 p-2 dark:from-black md:p-6">
        <h1 className="text-base font-bold tracking-wider text-white md:text-3xl">{item.title}</h1>
        <h3 className="font-merriweather tracking-wide text-slate-300 md:text-lg">
          {item.tagline}
        </h3>
      </div>
      {videoData && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-gray-400 duration-700 hover:scale-110 hover:text-white">
          <IconButton onClick={() => setOpenModal(true)} color="white" size="xlarge">
            <BsPlayCircle />
          </IconButton>
        </div>
      )}
      {openModal && (
        <Trailer
          movieId={item.id}
          trailerKey={videoData.key}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
      <div className="absolute bottom-0 left-0 flex h-1/3 w-full items-end justify-between bg-gradient-to-t from-slate-500 p-2 dark:from-black md:p-4">
        <div className="flex items-center">
          <AiFillStar className="mr-1 text-xl text-yellow-500 md:text-3xl" />
          <div className="text-sm md:text-base">
            <p>
              <span>{item.vote_average.toPrecision(2)} </span> /10
            </p>
            <p>
              <span>{item.vote_count}</span> vote
            </p>
          </div>
        </div>
        <div>
          <p className="flex items-center break-words text-sm text-white md:text-base">
            <BsFillClockFill className="mr-1 text-red-800" /> <span>{duration}</span>{' '}
          </p>
          <p className="flex items-center break-words text-sm text-white md:text-base">
            <BsCalendar3 className="mr-1 text-green-900" /> <span>{item.release_date}</span>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieMedia;
