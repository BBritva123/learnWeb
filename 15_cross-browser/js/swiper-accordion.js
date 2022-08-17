document.addEventListener('DOMContentLoaded', function () {
  let swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    // effect: 'coverflow',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    speed: 1000,
    // autoplay: {
    //   delay: 5000,
    //   stopOnLastSlide: true,
    //   disableOnInteraction: false,
    // },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    grabCursor: true,
    touchRatio: 5,
  });
});

document.addEventListener('DOMContentLoaded', function () {
  $("#accordion").accordion({
    collapsible: true,
    active: false
  });
});


document.addEventListener('DOOMContentLoaded', function () {
  $(function () {
    $("#tabs").tabs();
  });
})

$(document).ready(function () {
  $('.main__questions-heading').click(function () {
    $('.main__questions-plus').toggleClass('accordion-active')
  })
})
