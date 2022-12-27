// Бургер
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menulink = menu.querySelectorAll('.header__link');

burger.addEventListener('click',
  function () {
    menu.classList.toggle('header__nav--active');
    burger.classList.toggle('burger--active');
    document.body.classList.toggle('stop-scroll');
  });

menulink.forEach(function (el) {
  el.addEventListener('click',
    function () {
      menu.classList.remove('header__nav--active');
      burger.classList.remove('burger--active');
      document.body.classList.remove('stop-scroll');
    });
});


// Скрытие блоков и показ по кнопке
let aboutMore = document.querySelector('.about-right__more');
let about = document.querySelectorAll('.about-right__item');

aboutMore.addEventListener('click',
  function () {
    about.forEach(function (el) {
      el.classList.toggle('about-right__item_visible')
    });
    aboutMore.classList.add('about-right__more_hidden');
  });


// Табы
let workingLink = document.querySelectorAll('.working__link');
let workingPreview = document.querySelectorAll('.working-preview');

workingLink.forEach(function (element) {
  element.addEventListener('click', function (el) {

    const path = el.currentTarget.dataset.path;

    workingLink.forEach(function (e) {
      e.classList.remove('working__link--active')
    });

    el.currentTarget.classList.add('working__link--active');

    workingPreview.forEach(function (w) {
      w.classList.remove('working__preview--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('working__preview--active');
  });
});


// Слайдер
const swiper = new Swiper('.hero__swiper', {
  loop: true,
  speed: 500,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true,
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 100,
    slideShadows: true,
    depth: 100,
    modifier: 3,
  },
});


// Аккордион
new Accordion('.faq__list', {
  elementClass: 'faq__item',
  triggerClass: 'faq__top',
  panelClass: 'faq__bottom',
  activeClass: 'faq--active',
  duration: 700,
  icon: false,
  heightStyle: "content",
  collapsible: true,
  active: false,
});


// Показ строки поиска
let btnOpen = document.querySelector('.header-form__btn-open');
let form = document.querySelector('.header-form__form');
let btnClose = document.querySelector('.header-form__closed');

btnOpen.addEventListener('click', function () {
  form.classList.add('header-form__form__active');
  this.classList.add('active');
});

btnClose.addEventListener('click', function () {
  form.classList.remove('header-form__form__active');
  btnOpen.classList.remove('active');
  form.querySelector('input').value = "";
});

document.addEventListener('click', function (e) {
  let target = e.target;
  if (!target.closest('.header__form')) {
    form.classList.remove('header-form__form__active');
    btnOpen.classList.remove('active');
    form.querySelector('input').value = "";
  };
  form.reset();
});
