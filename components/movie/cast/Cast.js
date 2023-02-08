import Image from 'next/image';
import anonymousPerson from '../../../public/anonymousPerson.jpg';
import TextButton from '../../ui/buttons/TextButton';
import { useState } from 'react';

const Cast = ({ cast, directors }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="font-josefin dark:text-gray-400">
      {directors.length > 0 && (
        <p className="text-white dark:text-gray-400 md:text-2xl">
          Director: <span className=" text-slate-900 dark:text-white">{directors.join(', ')}</span>
        </p>
      )}
      <hr className="my-6 dark:border-gray-400 " />

      <h3 className="mb-2 w-full text-white dark:text-gray-400 md:text-2xl">Cast:</h3>

      <div className="flex w-full flex-wrap">
        {cast.slice(0, showMore ? cast.length : 10).map((person) => (
          <div className="w-20 p-2 text-center md:mx-4 md:my-1 md:w-24" key={person.id}>
            <Image
              width={100}
              height={150}
              alt={person.name}
              className="h-auto w-full rounded-full"
              src={
                person.profile_path
                  ? `https://image.tmdb.org/t/p/original${person.profile_path}`
                  : anonymousPerson
              }
            />
            <p className="text-sm text-slate-900 dark:text-white md:text-base">{person.name}</p>
          </div>
        ))}
        <div className="flex items-center">
          <TextButton
            text={showMore ? 'Show less' : 'Show more'}
            onClick={() => setShowMore((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
};

export default Cast;
