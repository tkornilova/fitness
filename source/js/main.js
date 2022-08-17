window.addEventListener('DOMContentLoaded', () => {
  const bodyWrapper = document.querySelector('.wrapper');
  const videoContainer = document.querySelector('.gym__video');
  const video = document.querySelector('iframe');

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
});
