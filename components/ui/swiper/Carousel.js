import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import LargeMovieCard from '../cards/LargeMovieCard';

const Carousel = ({ items }) => {
  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar',
          clickable: true
        }}
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff'
        }}
        className="MySwiper"
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: false,
          waitForTransition: false
        }}
        slidesPerView={1}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}>
        {items.map(
          (item) =>
            item.backdrop_path && (
              <SwiperSlide key={item.id}>
                <LargeMovieCard item={item} />
              </SwiperSlide>
            )
        )}
      </Swiper>
    </>
  );
};

export default Carousel;
