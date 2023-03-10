import { getMovie, getCredits, getSimilars, getVideoList, getPopular } from '../../services';
import MovieMedia from '../../components/movie/movieMedia/MovieMedia';
import Cast from '../../components/movie/cast/Cast';
import GenresList from '../../components/movie/genres/GenresList';
import CarouselContainer from '../../components/ui/swiper/CarouselContainer';
import MultiCarousel from '../../components/ui/swiper/MultiCarousel';
import Overview from '../../components/movie/overview/Overview';
import Head from 'next/head';

const MoviePage = (props) => {
  const { movie, credits, similars, videos } = props;

  const directors = credits.crew
    .filter((person) => person.job === 'Director')
    .map((item) => item.name);

  const video = videos.results.find(
    (item) => (item.type === 'Teaser' || 'Trailer') && item.site === 'YouTube'
  );

  return (
    <>
      <Head>
        <title>{`NUBI-${movie.title}`}</title>
        <meta name="description" content={`${movie.title} trailer, overview,cast...`} />
      </Head>
      <div className="flex flex-col items-center p-12">
        <MovieMedia item={movie} videoData={video} />

        <GenresList genres={movie.genres} />
        <hr className="my-6 w-full dark:border-gray-400 " />

        <Overview overview={movie.overview} />
        <hr className="my-6 w-full  dark:border-gray-400 " />

        <Cast directors={directors} cast={credits.cast} />
        <hr className="my-6 w-full dark:border-gray-400 " />

        <CarouselContainer title="Similar Movies">
          <MultiCarousel items={similars} />
        </CarouselContainer>
      </div>
    </>
  );
};
export async function getStaticProps(context) {
  const { params } = context;
  const id = params.movieId;
  try {
    const [movieData, creditData, similarData, videoData] = await Promise.all([
      getMovie(id),
      getCredits(id),
      getSimilars(id, '1'),
      getVideoList(id)
    ]);

    return {
      props: {
        movie: movieData,
        credits: creditData,
        similars: similarData.results,
        videos: videoData
      }
    };
  } catch {
    return {
      notFound: true
    };
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { movieId: '758009' } }],
    fallback: 'blocking'
  };
}
export default MoviePage;
