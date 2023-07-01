var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
  });

  var swiper1 = new Swiper('.swiper1', {
    slidesPerView: 1,
    direction: getDirection(),
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    on: {
      resize: function () {
        swiper1.changeDirection(getDirection());
      },
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1920: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },

  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }