import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperHero = () => {
  new Swiper('.swiper-hero', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 800,
    grabCursor: true,
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    breakpoints: {
      320: {
        slidesPerView: 1.7,
        spaceBetween: -65,
      },
      1440: {
        slidesPerView: 4,
      },
    },
  });
};

export default swiperHero;
