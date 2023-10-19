class Slider {
  constructor(slides) {
    this.slideIndex = 0;
    this.slides = slides;
  }

  _showSlides() {
    if (this.slideIndex > this.slides.length - 1) {
      this.slideIndex = 0;
    }
    if (this.slideIndex < 0) {
      this.slideIndex = this.slides.length - 1;
    }

    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = "none";
    }

    this.slides[this.slideIndex].style.display = "block";
  }

  next() {
    this.slideIndex++;
    this._showSlides();
  }

  current(n) {
    this.slideIndex = n;
    this._showSlides();
  }

  prev() {
    this.slideIndex--;
    this._showSlides();
  }
}

class SliderWithText extends Slider {
  constructor(slides) {
    super(slides);
    this.apartmentData = [
      {
        repairTime: "3.5 months",
        area: "81 sq ft",
      },
      {
        repairTime: "2 months",
        area: "205 sq ft",
      },
      {
        repairTime: "4 months",
        area: "283 sq ft",
      },
    ];
    this.dots = document.getElementsByClassName("dot-indicator");
    this.captions = document.getElementsByClassName("caption-text");
    this.repairTime = document.getElementById("repair-time");
    this.appArea = document.getElementById("app-area");
  }
  _showSlides() {
    super._showSlides();
    for (let i = 0; i < this.slides.length; i++) {
      this.dots[i].classList.remove("dot-indicator_active");
      this.captions[i].classList.remove("caption-text_active");
    }

    this.slides[this.slideIndex].style.display = "block";
    this.dots[this.slideIndex].classList.add("dot-indicator_active");
    this.captions[this.slideIndex].classList.add("caption-text_active");
    this.repairTime.innerText = this.apartmentData[this.slideIndex].repairTime;
    this.appArea.innerText = this.apartmentData[this.slideIndex].area;
  }
}

const slides1 = document.getElementsByClassName("slide");
const slides2 = document.getElementsByClassName("slide_2");
const slider1 = new SliderWithText(slides1);
const slider2 = new Slider(slides2)

const videoPlayer = document.querySelector(".video-player");
const video = videoPlayer.querySelector(".video");
const playButton = videoPlayer.querySelector(".play-button");
const overlay = videoPlayer.querySelector(".video-overlay");


videoPlayer.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    overlay.style.display = "none";
    playButton.style.display = "none";
  } else {
    video.pause();
    overlay.style.display = "flex";
    playButton.style.display = "flex";
  }
});



const styleSlideContainer = document.querySelector(".slideshow-container__vertical");
const images = [...styleSlideContainer.querySelectorAll('img')];
const styleList = document.querySelector(".style-list");
const slides3 = [...document.querySelectorAll(".masonry")];
const innerContainer = document.querySelector(".inner-container__vertical");

function scrollToSlide(styleName){
  const targetSlide = slides3.find((slide) => slide.dataset.style === styleName);
  if (!targetSlide) {
    return
  }

  const slideOffset = targetSlide.offsetTop;
  innerContainer.style.transform = `translateY(-${slideOffset}px)`;
}

function highlightCurrentItem() {
  const slides3 = document.querySelectorAll(".masonry");
  const styleListItems = document.querySelectorAll('.style-list__item');
  const options = {
    root: styleSlideContainer,
    rootMargin: "0px",
    threshold: 0.4,
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const slideStyleName = entry.target.dataset.style;
      const matchingListItem = document.querySelector(`.style-list__item[data-style="${slideStyleName}"]`);
      const slide = entry.target;
      if (entry.isIntersecting) {
        styleListItems.forEach(item => item.classList.remove('active'));
        matchingListItem.classList.add('active');
        slide.classList.add('fade-in');
      } else {
        slide.classList.remove('fade-in');
      }
    });
  }, options);

  slides3.forEach(slide => {
    observer.observe(slide);
  });
}

styleList.addEventListener("click", (event) => {
  const itemStyleName = event.target.dataset.style;
  if (itemStyleName) {
    scrollToSlide(itemStyleName);

  }
});

highlightCurrentItem()

const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get('name');
  alert(`Thanks for reaching out, ${name}!`)
}