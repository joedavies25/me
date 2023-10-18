$(document).ready(function () {
  $("#pagepiling").pagepiling({
    menu: null,
    direction: "vertical",
    verticalCentered: true,
    sectionsColor: ["white", "#d9d9d9"],
    anchors: ["", "about"],
    scrollingSpeed: 700,
    easing: "swing",
    loopBottom: false,
    loopTop: false,
    css3: true,
    navigation: {
      textColor: "#353535",
      bulletsColor: "#353535",
      position: "right",
      tooltips: ["Landing", "About"],
    },
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: ".section",
    animateAnchor: false,

    //events
    onLeave: function (index, nextIndex, direction) {},
    afterLoad: function (anchorLink, index) {},
    afterRender: function () {},
  });

  $(".slick-carousel").slick({
    infinate: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    slidesToShow: 6,
    centerMode: true,
    swipeToSlide: true,
    speed: 300,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});

const blurDiv = document.querySelector(".blur-load");
const img = blurDiv.querySelector("img");

const loaded = () => {
  blurDiv.classList.add("loaded");
};

if (img.complete) {
  loaded();
} else {
  img.addEventListener("load", loaded);
}
