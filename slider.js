const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const sliderItems = document.querySelectorAll('.slider-item');

let SliderIndex = 0;

nextBtn.addEventListener('click', () => {
  sliderItems[SliderIndex].classList.remove('show');
  if (SliderIndex === sliderItems.length - 1) {
    SliderIndex = 0;
  } else {
    SliderIndex += 1;
  }
  sliderItems[SliderIndex].classList.add('show');
});

prevBtn.addEventListener('click', () => {
  sliderItems[SliderIndex].classList.remove('show');
  if (SliderIndex === 0) {
    SliderIndex = sliderItems.length - 1;
  } else {
    SliderIndex -= 1;
  }
  sliderItems[SliderIndex].classList.add('show');
});

const scrollTop = document.querySelector('#scroll-top');
scrollTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

const dropdownBtn = document.querySelector('#dropdown-btn');
const dropdownMenu = document.querySelector('#dropdown-container');

dropdownBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
  if (dropdownMenu.classList.contains('show')) {
    dropdownBtn.innerHTML = `⬆`;
  } else {
    dropdownBtn.innerHTML = ` ⬇`;
  }
});



