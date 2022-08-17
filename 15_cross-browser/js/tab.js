// document.addEventListener('DOMContentLoaded', function () {
// document.querySelectorAll('.tab-content').forEach(function (tabContent) {
//   tabContent.classList.remove('tab-content-active')
// })
// })

document.addEventListener('DOMContentLoaded', function () { // для окна выполнем функцию: //
  document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) { //выбрать все классы  идля функции//

    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.tab-content', '.tabs__btn').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      // document.querySelectorAll('.tabs__btn').forEach(function (tabButton) {
      //   tabButton.classList.remove('tab-content-active')
      // })
      document.querySelector(`[data-target="${path}"]`).classList.toggle('tab-content-active')

    })
  })
})

// $(document).ready(function () {
//   $('.tabs__btn').click(function () {
//     $('.tabs__btn').removeClass('tab-active'),
//     $('.tabs__btn').addClass('tab-active')
//
//   })
// })
