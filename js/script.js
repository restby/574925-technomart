/**/
var slider1 = document.querySelector('.promo-slide1');
var slider2 = document.querySelector('.promo-slide2');
var sliderControls1 = document.querySelector('.btn-slider-next');
var sliderControls2 = document.querySelector('.btn-slider-prev');
var slideIndicator1 = document.querySelector('.btn-slider-indicator-1');
var slideIndicator2 = document.querySelector('.btn-slider-indicator-2');
var modalWriteUs = document.querySelector('.modal-write');
var openModalWriteUs = document.querySelector('.btn-write-us');
var closeModalWriteUs = document.querySelector('.modal-write-close');
var servicesSlide1 = document.querySelector('.services-slide-1');
var servicesSlide2 = document.querySelector('.services-slide-2');
var servicesSlide3 = document.querySelector('.services-slide-3');
var servicesControlSlide1 = document.querySelector('.services-item:nth-child(1) .btn-services-item');
var servicesControlSlide2 = document.querySelector('.services-item:nth-child(2) .btn-services-item');
var servicesControlSlide3 = document.querySelector('.services-item:nth-child(3) .btn-services-item');
var wrapperMinMap = document.querySelector('.wrapper-min-map');
var wrapperModalMap = document.querySelector('.modal-map');
var closeModalMap = document.querySelector('.modal-map-close');
var transparentBtn = document.querySelector('.transparent-btn');
var modalCart = document.querySelector('.modal-cart');
var btnBuy = document.querySelectorAll('.btn-buy');
var closeModalCart = document.querySelector('.modal-cart-close');

if (sliderControls1 && sliderControls2) {
  sliderControls1.addEventListener('click', function(evt) {
    evt.preventDefault();
    slider1.classList.toggle('show-promo-slide');
    slider2.classList.toggle('show-promo-slide');
    slideIndicator1.classList.toggle('indicator-active');
    slideIndicator2.classList.toggle('indicator-active');
  });
  sliderControls2.addEventListener('click', function(evt) {
    evt.preventDefault();
    slider1.classList.toggle('show-promo-slide');
    slider2.classList.toggle('show-promo-slide');
    slideIndicator1.classList.toggle('indicator-active');
    slideIndicator2.classList.toggle('indicator-active');
  });
}

if (servicesControlSlide1 && servicesControlSlide2 && servicesControlSlide3) {
  servicesControlSlide1.addEventListener('click', function(evt) {
    evt.preventDefault();
    servicesControlSlide1.classList.add('active-item');
    servicesControlSlide2.classList.remove('active-item');
    servicesControlSlide3.classList.remove('active-item');

    servicesSlide1.classList.add('services-slide-show');
    servicesSlide2.classList.remove('services-slide-show');
    servicesSlide3.classList.remove('services-slide-show');
  });
  servicesControlSlide2.addEventListener('click', function(evt) {
    evt.preventDefault();
    servicesControlSlide1.classList.remove('active-item');
    servicesControlSlide2.classList.add('active-item');
    servicesControlSlide3.classList.remove('active-item');

    servicesSlide1.classList.remove('services-slide-show');
    servicesSlide2.classList.add('services-slide-show');
    servicesSlide3.classList.remove('services-slide-show');
  });
  servicesControlSlide3.addEventListener('click', function(evt) {
    evt.preventDefault();
    servicesControlSlide1.classList.remove('active-item');
    servicesControlSlide2.classList.remove('active-item');
    servicesControlSlide3.classList.add('active-item');

    servicesSlide1.classList.remove('services-slide-show');
    servicesSlide2.classList.remove('services-slide-show');
    servicesSlide3.classList.add('services-slide-show');
  });
}
if(openModalWriteUs) {
  openModalWriteUs.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalWriteUs.classList.add('modal-write-show');
  });
  closeModalWriteUs.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalWriteUs.classList.remove('modal-write-show');
  });
    window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modalWriteUs.classList.contains('modal-write-show')) {
      modalWriteUs.classList.remove('modal-write-show');
      }
    }
  });
}

if(transparentBtn) {
  transparentBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    wrapperModalMap.classList.add('modal-map-show');
  });
  closeModalMap.addEventListener('click', function(evt) {
    evt.preventDefault();
    wrapperModalMap.classList.remove('modal-map-show');
  });
  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (wrapperModalMap.classList.contains('modal-map-show')) {
      wrapperModalMap.classList.remove('modal-map-show');
      }
    }
  });
}

for (var i = 0; i < btnBuy.length; i++) {
  btnBuy[i].addEventListener('click', function(evt) {
  evt.preventDefault();
  modalCart.classList.add('modal-cart-show');
  });
}
closeModalCart.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalCart.classList.remove('modal-cart-show');
});
window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalCart.classList.contains('modal-cart-show')) {
    modalCart.classList.remove('modal-cart-show');
    }
  }
});
