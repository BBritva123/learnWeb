document.addEventListener('DOMContentLoaded', function () {
  let swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    // effect: 'coverflow',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
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

$(document).ready(function() {
  $('.main__questions-heading').click(function (){
    $('.main__questions-plus').toggleClass('accordion-active')
  })
})
