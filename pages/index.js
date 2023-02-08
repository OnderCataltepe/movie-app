import Head from 'next/head';
import MultiCarousel from '../components/ui/swiper/MultiCarousel';
import Carousel from '../components/ui/swiper/Carousel';
import { getNowPlaying, getTopRated, getUpcoming } from '../services';
import dynamic from 'next/dynamic';

import CarouselContainer from '../components/ui/swiper/CarouselContainer';
export default function Home(props) {
  const { nowPlayings, upComings, topRated } = props;

  return (
    <>
      <Head>
        <meta name="description" content="NUBI. A movie app built with next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex w-full flex-col items-center px-8 pt-12 md:px-12 md:pt-16">
        {upComings && (
          <CarouselContainer title="Movies Coming Soon">
            <Carousel items={upComings} />
          </CarouselContainer>
        )}
        {nowPlayings && (
          <CarouselContainer title="Now Playing in Theaters">
            <MultiCarousel items={nowPlayings} />
          </CarouselContainer>
        )}
        {topRated && (
          <CarouselContainer title="Top Rated Movies">
            <MultiCarousel items={topRated} />
          </CarouselContainer>
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const [nowplay, upcom, toprat] = await Promise.all([
    getNowPlaying('1'),
    getUpcoming('1'),
    getTopRated('1')
  ]);
  return {
    props: {
      nowPlayings: nowplay.results,
      upComings: upcom.results,
      topRated: toprat.results
    },
    revalidate: 86400
  };
}
