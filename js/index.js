const sectionVideo = document.querySelector('.section__video');
const videoPost = document.querySelector('.section__video-post');

function videoPostNone() {
      videoPost.classList.toggle('section__video-post--active')
}

sectionVideo.addEventListener('click', videoPostNone)