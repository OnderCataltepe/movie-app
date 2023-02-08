import MovieCard from './MovieCard';

const MovieList = ({ items }) => {
  return (
    <div className="relative grid grid-cols-2 place-items-center gap-4 py-6 md:grid-cols-4 md:gap-10 lg:grid-cols-5">
      {items.map((item) => (
        <MovieCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MovieList;
