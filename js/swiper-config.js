var commonParams = {
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    950: {
      slidesPerView: 2,
    },
    1800: {
      slidesPerView: 3,
    },
  },
};

var paramsOracle = Object.assign({}, commonParams, {
  navigation: {
    nextEl: ".oracle-next",
    prevEl: ".oracle-prev",
  },
  pagination: {
    el: ".swiper-oracle-p",
    clickable: true,
    dynamicBullets: true,
  },
});

var paramsCoursera = Object.assign({}, commonParams, {
  navigation: {
    nextEl: ".coursera-next",
    prevEl: ".coursera-prev",
  },
  pagination: {
    el: ".swiper-coursera-p",
    clickable: true,
    dynamicBullets: true,
  },
});

var paramsGoogle = Object.assign({}, commonParams, {
  navigation: {
    nextEl: ".google-next",
    prevEl: ".google-prev",
  },
  pagination: {
    el: ".swiper-google-p",
    clickable: true,
    dynamicBullets: true,
  },
});

var swiperOracle = new Swiper(".swiper-oracle", paramsOracle);
var swiperCoursera = new Swiper(".swiper-coursera", paramsCoursera);
var swiperCoursera = new Swiper(".swiper-google", paramsGoogle);