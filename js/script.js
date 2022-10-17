let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot-indicator");
  let captions = document.getElementsByClassName("caption-text")
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-indicator_active", "");
  }
  for (i = 0; i < captions.length; i++) {
    captions[i].className = captions[i].className.replace(" caption-text_active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " dot-indicator_active";
  captions[slideIndex-1].className += " caption-text_active";
}

let slideIndexSecond = 1;
showSlidesSecond(slideIndexSecond);

function plusSlidesSecond(n) {
  showSlidesSecond(slideIndexSecond += n);
}

function currentSlideSecond(n) {
  showSlidesSecond(slideIndexSecond = n);
}

function showSlidesSecond(n) {
  let i;
  let slides = document.getElementsByClassName("slide_2");
  if (n > slides.length) {slideIndexSecond = 1}
  if (n < 1) {slideIndexSecond = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndexSecond-1].style.display = "block";
}

const videoPlayer = document.querySelector('.video-player')
const video = videoPlayer.querySelector('.video')
const playButton = videoPlayer.querySelector('.play-button')
const overlay = videoPlayer.querySelector('.video-overlay')

videoPlayer.addEventListener('click', (e) => {
  if(video.paused){
    video.play()
    overlay.style.display = "none"
    playButton.style.display = "none"
  } else {
    video.pause()
    overlay.style.display = "flex"
    playButton.style.display = "flex"
  }
})
