// Header navigation toggle function
document.querySelector('.toggleIcon').addEventListener('click', function () {
  this.classList.toggle('open');
  document.querySelector('.mainNav').classList.toggle('open'); // toggle your nav visibility
  document.body.classList.toggle("menu-open");
});
// document.querySelector('.toggleClose').addEventListener('click', function () {
//   this.classList.toggle('open');
//   document.querySelector('.mainNav').classList.toggle('open'); // toggle your nav visibility
// });

// Sticky header function
window.addEventListener("scroll", function () {
  const header = document.querySelector(".mainHeader");
  const banner = document.querySelector(".bannerSec");

  if (!banner || !header) return;

  const bannerBottom = banner.offsetTop + banner.offsetHeight;
  const scrollY = window.scrollY;

  if (scrollY >= bannerBottom) {
    header.classList.add("is_sticky");
  } else {
    header.classList.remove("is_sticky");
  }
});

// Visualize kitchen section slider with thumb slider
var bgSwiper = new Swiper('.vkbgSlider', {
  slidesPerView: 1,
  loop: true,
  speed: 400,
  effect: 'fade',
  allowTouchMove: false
});
var thumbSwiper = new Swiper('.vkthumbSlider', {
  slidesPerView: 'auto',
  loop: true,
  speed: 600,
  thumbs: {
    swiper: bgSwiper
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  allowTouchMove: false
});

thumbSwiper.controller.control = bgSwiper;

// Process section steps slider with scroll and touch
const swiper = new Swiper('.procSwiper', {
  freeMode: true,
  mousewheel: {
    enabled: true,
    releaseOnEdges: true, // allow page scroll when at first/last slide
    sensitivity: 1,       // optional: adjust scroll sensitivity
  },
  keyboard: { enabled: true },
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    hide: false,
    dragSize: 90,
    snapOnRelease: false,
  },
});

// Form floating label function
document.addEventListener('DOMContentLoaded', () => {
  const fields = document.querySelectorAll('.custom-form input, .custom-form textarea');

  fields.forEach(field => {
    field.addEventListener('blur', () => {
      if (field.value.trim()) {
        field.classList.add('filled');
      } else {
        field.classList.remove('filled');
      }
    });

    // Trigger on load for prefilled fields
    if (field.value.trim()) {
      field.classList.add('filled');
    }
  });
});

// Pure page image slider
const pureswiper = new Swiper('.pureSwiper', {
  freeMode: true,
  slidesPerView: 1.3,
  spaceBetween: 25,
  navigation: {
    nextEl: '.pureswiper-button-next',
  },
  pagination: {
    el: ".pureswiper-pagination",
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 25,
    },
  },
});

// Projects page image slider
const projmainswiper = new Swiper('.projectHorSlider', {
  freeMode: true,
  slidesPerView: 1,
  spaceBetween: 25,
});

// Mobile slider for Insights section
var insinit = false;
var insightswiper;
function insightsSwiperCard() {
  if (window.innerWidth <= 991) {
    if (!insinit) {
      insinit = true;
      insightswiper = new Swiper(".insights", {
        direction: "horizontal",
        slidesPerView: 1.1,
        // centeredSlides: true,
        spaceBetween: 12,
      });
    }
  } else if (insinit) {
    insightswiper.destroy();
    insinit = false;
  }
}
insightsSwiperCard();
window.addEventListener("resize", insightsSwiperCard);

// Mobile slider for Awards section
var awardinit = false;
var awardswiper;
function awardsSwiperCard() {
  if (window.innerWidth <= 991) {
    if (!awardinit) {
      awardinit = true;
      awardswiper = new Swiper(".awardLogos", {
        direction: "horizontal",
        slidesPerView: 2.8,
        // centeredSlides: true,
        spaceBetween: 45,
        breakpoints: {
          768: {
            slidesPerView: 3.8,
            spaceBetween: 25,
          },
        },
      });
    }
  } else if (awardinit) {
    awardswiper.destroy();
    awardinit = false;
  }
}
awardsSwiperCard();
window.addEventListener("resize", awardsSwiperCard);

// Mobile slider for Projects section
// var projectinit = false;
// var projectswiper = null;
// function projectSwiperCard() {
//   if (window.innerWidth <= 768 && !projectswiper) {
//     projectinit = true;
//     document.querySelector('.projectSlider').classList.add('swiper');
//     document.querySelectorAll('.projSlideItem').forEach(item => {
//       item.classList.add('swiper-slide');
//     });
//     projectswiper = new Swiper(".projectSlider", {
//       direction: "horizontal",
//       slidesPerView: 1.1,
//       // centeredSlides: true,
//       spaceBetween: 10,
//       scrollbar: {
//         el: '.swiper-scrollbar',
//         draggable: true,
//         hide: false,
//         dragSize: 90,
//         snapOnRelease: false,
//       },
//     });
//   } else if (window.innerWidth > 768 && projectswiper) {
//     projectswiper.destroy(true, true);
//     projectswiper = null;
//     // projectinit = false;
//   }
// }
// projectSwiperCard();
// window.addEventListener("resize", projectSwiperCard);

// Hide and show sitemap in the footer
const toggleBtn = document.getElementById("toggleSitemap");
const sitemap = document.getElementById("footSitemap");

toggleBtn.addEventListener("click", () => {
  sitemap.classList.toggle("active");

  if (sitemap.classList.contains("active")) {
    toggleBtn.textContent = "Hide Sitemap";
  } else {
    toggleBtn.textContent = "Show Sitemap";
  }
});