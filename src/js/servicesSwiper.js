import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperServices = () => {
  new Swiper('.swiper-services', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 300,
    grabCursor: false,
    navigation: {
      nextEl: '.swiper-button-next_services',
      prevEl: '.swiper-button-prev_services',
    },
    pagination: {
      // <--- Додаємо пагінацію
      el: '.swiper-pagination_services',
      clickable: true,
      type: 'bullets', // Кружечки
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        allowTouchMove: true,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: false,
      },
    },
  });
};

export default swiperServices;
