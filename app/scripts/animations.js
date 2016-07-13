'use strict';

/* HASH SCROLLING ANIMATION */
/* Get working to find hash and then add translate to correct offset position.
document.querySelector('.wrapper-menu').querySelectorAll('a').onclick = (event) => {
  console.log(event.path[0].baseURI);
  event.preventDefault();
} */

/* PARTICLES.JS */
particlesJS.load('particles-landing', 'particles-landing.json');
particlesJS.load('particles-menu', 'particles-menu.json');

/* INTERVALS TO TOGGLE SHINE CLASS ON CRYSTALS */
var shineDivTypes = ['normal', 'reverse'];
var shineTypes = ['shine'];

setInterval(() => {
  let currentShineDiv = $('.shineDiv')[Math.floor((Math.random() * $('.shineDiv').length) + 0)];
  currentShineDiv.className = 'shineDiv ' + shineDivTypes[Math.floor((Math.random() * shineDivTypes.length) + 0)];
  currentShineDiv.classList.toggle('shine');
}, Math.floor((Math.random() * 2900) + 1800));

// setInterval(() => {
//   $('.shineDiv')[Math.floor((Math.random() * $('.shineDiv').length) + 0)].classList.toggle('shine');
// }, Math.floor((Math.random() * 10000) + 7100));

/* GSAP ANIMATIONS */
TweenLite.to($('.logotype'), 2, { autoAlpha: 1, y: -35, rotation: 0, ease: Power2.easeOut, delay: 0.5 }); // Fade logo in on load.

/* SCROLLMAGIC ANIMATIONS */
var controller = new ScrollMagic.Controller();

/* var testScene = new ScrollMagic.Scene({
  triggerElement: '.menu-about',
  offset: 100
}).setClassToggle('.menu-about', 'fade-out').addTo(controller); */
/* .addIndicators({
  name: 'Fade out',
  colorTrigger: 'black',
  indent: 10
}) */
