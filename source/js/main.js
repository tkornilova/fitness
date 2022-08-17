window.addEventListener('DOMContentLoaded', () => {
  const bodyWrapper = document.querySelector('.wrapper');

  const videoContainer = document.querySelector('.gym__video');
  const video = document.querySelector('iframe');

  const durationList = document.querySelectorAll('.prices__duration p');
  const priceLists = document.querySelectorAll('.prices__options ul');

  // Проверка JS
  if (bodyWrapper.classList.contains('wrapper-no-js')) {
    bodyWrapper.classList.remove('wrapper-no-js');
    videoContainer.classList.add('gym__video--nonactive');
    video.remove();
  }

  // Убрать обложку
  const removeVideoCover = () => {
    if (videoContainer.classList.contains('gym__video--nonactive')) {
      videoContainer.classList.remove('gym__video--nonactive');
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

  videoContainer.addEventListener('click', removeVideoCover);

  // Цены на абонементы
  const changePriceCard = (duration) => {
    duration.addEventListener('click', () => {
      let index = Array.from(durationList).indexOf(duration);

      durationList.forEach((item) => {
        item.classList.remove('prices__duration--active');
      });

      duration.classList.add('prices__duration--active');

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
            item.classList.remove('prices__duration--active');
          });

          duration.classList.add('prices__duration--active');

          priceLists.forEach((list) => {
            list.classList.remove('prices__list--active');
          });

          priceLists[index].classList.add('prices__list--active');
        }
      });
    });
  }
});
