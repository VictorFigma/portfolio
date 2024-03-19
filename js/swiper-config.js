const pixelChange1 = 950;
const pixelChange2 = 1800;

var commonParams = {
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    [pixelChange1]: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    [pixelChange2]: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
};

var paramsSkills = Object.assign({}, commonParams, {
  navigation: {
    nextEl: ".skills-next",
    prevEl: ".skills-prev",
  },
  pagination: {
    el: ".swiper-skills-p",
    clickable: true,
    dynamicBullets: true,
  },
});

var paramsProjects = Object.assign({}, {
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".projects-next",
    prevEl: ".projects-prev",
  },
  pagination: {
    el: ".swiper-projects-p",
    clickable: true,
    dynamicBullets: true,
  },
});

var paramsHackathons = Object.assign({}, {
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".hackathons-next",
    prevEl: ".hackathons-prev",
  },
  pagination: {
    el: ".swiper-hackathons-p",
    clickable: true,
    dynamicBullets: true,
  },
});

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

let lastWidth = window.innerWidth;

function handleResize() {
  const windowWidth = window.innerWidth;

  if ((lastWidth < pixelChange1 && windowWidth >= pixelChange1) ||
      (lastWidth >= pixelChange1 && windowWidth < pixelChange1) ||
      (lastWidth < pixelChange2 && windowWidth >= pixelChange2) || 
      (lastWidth >= pixelChange2 && windowWidth < pixelChange2)) {

      window.location.reload();
  }
  lastWidth = windowWidth;
}

var swiperSkills = new Swiper(".swiper-skills", paramsSkills);
var swiperProjects = new Swiper(".swiper-projects", paramsProjects);
var swiperHackathons = new Swiper(".swiper-hackathons", paramsHackathons);
var swiperOracle = new Swiper(".swiper-oracle", paramsOracle);
var swiperCoursera = new Swiper(".swiper-coursera", paramsCoursera);
var swiperGoogle = new Swiper(".swiper-google", paramsGoogle);

window.addEventListener("resize", handleResize);