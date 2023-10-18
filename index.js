$(document).ready(function () {
  $("#pagepiling").pagepiling({
    menu: null,
    direction: "vertical",
    verticalCentered: true,
    sectionsColor: ["white", "#d9d9d9"],
    scrollingSpeed: 700,
    easing: "swing",
    loopBottom: false,
    loopTop: false,
    css3: true,
    navigation: {
      textColor: "#000",
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
