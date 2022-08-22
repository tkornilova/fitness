import '../js/vendor/swiper';
import {maskPhone} from '../js/vendor/mask.js';

window.addEventListener('DOMContentLoaded', () => {
  const bodyWrapper = document.querySelector('.wrapper');

  const videoContainer = document.querySelector('.gym__video');
  const video = document.querySelector('iframe');
  const videoButton = document.querySelector('.gym__video button');

  const durationList = document.querySelectorAll('.prices__duration > p');
  const priceLists = document.querySelectorAll('.prices__options ul');

  const reviewsList = document.querySelectorAll('.reviews__item');

  const form = document.querySelector('.form__wrapper form');
  const phoneInput = document.querySelector('.form__phone input');
  const nameInput = document.querySelector('.form__name input');
  const formButton = document.querySelector('.form__wrapper button');

  // Проверка JS
  if (bodyWrapper.classList.contains('wrapper-no-js')) {
    bodyWrapper.classList.remove('wrapper-no-js');

    videoContainer.classList.add('gym__video--nonactive');
    videoContainer.removeAttribute('tabindex');
    videoButton.style.display = 'initial';
    video.remove();

    document.querySelector('.trainers__button-prev').removeAttribute('disabled');
    document.querySelector('.trainers__button-next').removeAttribute('disabled');
    document.querySelector('.reviews__button-prev').removeAttribute('disabled');
    document.querySelector('.reviews__button-next').removeAttribute('disabled');

    reviewsList.forEach((review) => {
      review.style.margin = '0 20px 0 0';
    });

    phoneInput.setAttribute('minlength', '18');
    phoneInput.setAttribute('maxlength', '18');
    phoneInput.setAttribute('pattern', '.{18,}');
  }

  // Убрать обложку
  const removeVideoCover = () => {
    if (videoContainer.classList.contains('gym__video--nonactive')) {
      videoContainer.classList.remove('gym__video--nonactive');
      videoButton.style.display = 'none';
      videoContainer.insertAdjacentHTML('afterbegin', '<iframe src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" title="YouTube video player" allow="autoplay" frameBorder="0" allowfullscreen></iframe>');
    }
  };

  /*
  const addVideoCover = () => {
    videoContainer.classList.add('gym__video--nonactive');
    video.remove();
  };

  video.addEventListener('ended', addVideoCover);
  */

  videoButton.addEventListener('click', removeVideoCover);

  // Цены на абонементы
  const changePriceCard = (duration) => {
    duration.addEventListener('click', () => {
      let index = Array.from(durationList).indexOf(duration);

      durationList.forEach((item) => {
        item.classList.remove('prices__duration-item--active');
      });

      duration.classList.add('prices__duration-item--active');

      priceLists.forEach((list) => {
        list.classList.remove('prices__list--active');
      });

      priceLists[index].classList.add('prices__list--active');
    });
  };

  for (let i = 0; i < durationList.length; i++) {
    durationList.forEach((duration) => {
      duration.addEventListener('click', changePriceCard(duration));
      duration.addEventListener('keydown', (evt) => {
        if (evt.keyCode === 13 || evt.keyCode === 32) {
          let index = Array.from(durationList).indexOf(duration);

          durationList.forEach((item) => {
            item.classList.remove('prices__duration-item--active');
          });

          duration.classList.add('prices__duration-item--active');

          priceLists.forEach((list) => {
            list.classList.remove('prices__list--active');
          });

          priceLists[index].classList.add('prices__list--active');
        }
      });
    });
  }

  // Swiper 7.4.1

  /* eslint-disable no-new */
  /* eslint-disable no-undef */

  new Swiper('.trainers__container', {
    loop: true,
    navigation: {
      nextEl: '.trainers__button-next',
      prevEl: '.trainers__button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  new Swiper('.reviews__container', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.reviews__button-next',
      prevEl: '.reviews__button-prev',
    },
  });

  // Mask
  maskPhone('.form__phone input');

  // Submit form

  formButton.addEventListener('click', () => {
    if (nameInput.value !== '' && phoneInput.value !== '' & phoneInput.value.length === 18) {
      localStorage.setItem('name', nameInput.value);
      localStorage.setItem('phone', phoneInput.value);
    } else {
      form.reportValidity();
    }
  });

});
