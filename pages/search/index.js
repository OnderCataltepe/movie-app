import { useRouter } from 'next/router';
import useSWR from 'swr';
import { getSearched } from '../../services';
import MovieList from '../../components/ui/cards/MovieList';
import Paginate from '../../components/ui/pagination/Paginate';
import Head from 'next/head';
const SearchPage = () => {
  const router = useRouter();
  const queryValue = router.query.value;
  const { data, error, isLoading } = useSWR(
    `/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${queryValue}`,
    getSearched
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <Head>
        <meta name="description" content={`Movie results for the query ${queryValue}`} />
      </Head>
      <div className="p-12">
        <h1
          className="mb-2 font-bold tracking-wide text-white dark:mb-4 dark:text-gray-500
           md:my-4 md:text-2xl">
          Results for {queryValue}
        </h1>
        <hr className="border-b-2 dark:border-gray-500" />
        {data.results.length > 0 ? (
          <MovieList items={data.results} />
        ) : (
          <p
            className="mb-2 font-bold tracking-wide text-red-900
        md:my-4 md:text-lg">
            Sorry, we couldn&apos;t find any results
          </p>
        )}
        <div className="flex justify-center">
          <Paginate total={data.total_results} pageSize={20} searchId={queryValue} />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
