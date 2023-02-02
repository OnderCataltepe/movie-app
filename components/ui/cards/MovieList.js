import data from '../../../dummyData.json';
import MovieCard from './MovieCard';
const MovieList = () => {
  return (
    <div className="relative grid grid-cols-2 place-items-center gap-1 py-6 md:grid-cols-4 lg:grid-cols-5">
      {data.results.map((item) => (
        <MovieCard
          key={item.id}
          image={item.poster_path}
          title={item.title}
          movieId={item.id}
          voteCount={item.vote_count}
          voteAverage={item.vote_average}
          releaseDate={item.release_date}
        />
      ))}
    </div>
  );
};

export default MovieList;
