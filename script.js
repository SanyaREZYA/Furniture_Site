"use strict";

let sliderArray = [
  { subheader: 'Inner Peace', description: '0 —— Bed Room', imagePath: 'images/slider_first.png', pageLink: '#' },
  { subheader: 'Inner Peace', description: '1 —— Working Room', imagePath: 'images/slider_second.png', pageLink: '#' },
  { subheader: 'Inner Peace', description: '2 —— Bed Room', imagePath: 'images/slider_third.jpg', pageLink: '#' },
  { subheader: 'Inner Peace', description: '3 —— Bed Room', imagePath: 'images/slider_fourth.jpg', pageLink: '#' }
];

let currentIndex = 0;
let arrayLength = sliderArray.length;

const firstLabel = document.querySelector(`label[for="r1"]`);
firstLabel.style.backgroundImage = "url('images/active.png')";

function toggleNav() {
  const navLinks = document.querySelector('.nav-links');
  const navIcons = document.querySelector('.nav-icons');
  const burgerIcon = document.querySelector('.burger-icon');

  navLinks.style.display = (navLinks.style.display === 'block') ? 'none' : 'block';
  navIcons.style.display = (navIcons.style.display === 'block') ? 'none' : 'block';
}

function changeBackground(index) {
  let sliderBg = document.querySelector('#slider-bg');
  let currentSlide = document.querySelector('.s1');

  currentIndex = index;

  //setTimeout(function () {
    if (sliderArray[index]) {
      sliderBg.style.backgroundImage = "url('" + sliderArray[index].imagePath + "')";
      document.querySelector('#slider-subheader').innerText = sliderArray[index].subheader;
      document.querySelector('#slider-description').innerText = sliderArray[index].description;
      currentSlide.style.marginLeft = -(currentIndex * 25) + '%';
    }
  //}, 50);
}

for (let i = 0; i < sliderArray.length; i++) {
  let label = document.querySelector(`label[for="r${i + 1}"]`);
  if (label) {
    label.addEventListener('click', function () {
      label.style.backgroundImage = "url('images/active.png')";

      for (let j = 0; j < sliderArray.length; j++) {
        if (j !== i) {
          let otherLabel = document.querySelector(`label[for="r${j + 1}"]`);
          if (otherLabel) {
            otherLabel.style.backgroundImage = "url('images/passive.png')";
          }
        }
      }

      changeBackground(i);
    });
  }
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + arrayLength) % arrayLength;
  changeBackground(currentIndex);
  updateActiveSlideLabel();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % arrayLength;
  changeBackground(currentIndex);
  updateActiveSlideLabel();
}

function updateActiveSlideLabel() {
  for (let j = 0; j < arrayLength; j++) {
    let label = document.querySelector(`label[for="r${j + 1}"]`);
    if (label) {
      label.style.backgroundImage = (j === currentIndex) ? "url('images/active.png')" : "url('images/passive.png')";
    }
  }
}

