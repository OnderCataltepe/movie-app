import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import MovieCard from '../cards/MovieCard';

const MultiCarousel = ({ items }) => {
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
        className="mySwiper"
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20
          }
        }}
        navigation={true}
        modules={[Pagination, Navigation]}>
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <MovieCard isSwiper={true} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MultiCarousel;
