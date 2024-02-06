"use strict";

let sliderArray = [
  {subheader: 'Inner peace', description: '0 —— Bed Room', imagePath:'images/slider_first.png', pageLink: '#'},
  {subheader: 'Inner peace', description: '1 —— Working Room', imagePath:'images/slider_second.png', pageLink: '#'},
  {subheader: 'Inner peace', description: '2 —— Bed Room', imagePath:'images/slider_third.jpg', pageLink: '#'},
  {subheader: 'Inner peace', description: '3 —— Bed Room', imagePath:'images/slider_fourth.jpg', pageLink: '#'}
]

function toggleNav() {
  const navLinks = document.querySelector('.nav-links');
  const navIcons = document.querySelector('.nav-icons');
  const burgerIcon = document.querySelector('.burger-icon');

  navLinks.style.display = (navLinks.style.display === 'block') ? 'none' : 'block';
  navIcons.style.display = (navIcons.style.display === 'block') ? 'none' : 'block';
}

function changeBackground(imageUrl) {
  let sliderBg = document.getElementById('slider-bg');
  setTimeout(function () {
    sliderBg.style.backgroundImage = "url('" + imageUrl + "')";
  }, 50);
}

