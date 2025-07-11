import mobileMenu from './js/header.js';
import { cookiePolicy } from './js/cookiesPolicy.js';
import swiperHero from './js/heroSwiper.js';
import swiperServices from './js/servicesSwiper.js';
import form from './js/checkbox.js';
mobileMenu();
cookiePolicy();
swiperHero();
swiperServices();
form();

AOS.init({
  once: true,
});
