import { getGenreMovies, getPopular } from '../../services';
import MovieList from '../../components/ui/cards/MovieList';
import { MENU_DATA } from '../../constants';
import Paginate from '../../components/ui/pagination/Paginate';
import Head from 'next/head';
const CategoryList = (props) => {
  const { data, title, query, totalItem } = props;

  return (
    <>
      <Head>
        <title>NUBI- {title} movies</title>
        <meta name="description" content={`${title} movies`} />
      </Head>

      <div className="p-12">
        <h1
          className="mb-2 font-bold tracking-wide text-white dark:mb-4 dark:text-gray-500
           md:my-4 md:text-2xl">
          {title} Movies
        </h1>
        <hr className="border-b-2 dark:border-gray-500" />
        <MovieList items={data} />
        <div className="flex justify-center">
          <Paginate total={totalItem} pageSize={20} genreId={query.id} />
        </div>
      </div>
    </>
  );
};

export default CategoryList;

export async function getServerSideProps(context) {
  const { query } = await context;
  const genre = MENU_DATA.find((item) => item.title === 'Movies').children.find(
    (subItem) => subItem.genreId === query.id
  );
  const popular = MENU_DATA.find((item) => item.title === 'Popular');
  const response =
    query.id === 'popular-movies'
      ? await getPopular(query.page)
      : await getGenreMovies(genre.id, query.page, 'popularity.desc');

  // tmbd allows us 20 items per page and a maximum of 500 pages
  const totalMovie = response.total_results > 10000 ? 10000 : response.total_results;

  return {
    props: {
      data: response.results,
      totalItem: totalMovie,
      title: query.id === 'popular-movies' ? popular.title : genre.title,
      query: query
    }
  };
}
