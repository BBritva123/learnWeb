// document.addEventListener('DOMContentLoaded', function () {
//   document.querySelectorAll('.header__navigation-item-mobile').forEach(function (burgerNavigation) {
//     burgerNavigation.addEventListener('click', function (event) {
//       const path = event.currentTarget.dataset.path
//       document.querySelectorAll('.tab-content').forEach(function (tabContent) {
//         tabContent.classList.remove('nav__burger-menu-active')
//       });
//       document.querySelector(`[data-target="${path}"]`).classList.toggle('nav__burger-menu-active')
//     });
//   });
// });

$(document).ready(function () {
  $('.header__navigation-item-mobile').click(function () {

// при клике на  добавить или убрать класс burger__active в .header__navigation-burger//
    $('.header__navigation-burger, .nav__burger-menu-active, .header__navigation-item-mobile:focus, .header__pictures').toggleClass('burger__active')
  })
})

$(document).ready(function () {
  $('.header__search').click(function () {
    $('.header__search-block, .header__search').addClass('search__active')
  })
  $('.header__close-button').click(function () {
    $('.header__search-block, .header__search').removeClass('search__active')
  })
})




