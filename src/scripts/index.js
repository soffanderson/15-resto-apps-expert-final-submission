/* eslint-disable max-len */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#openMenu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

// Script Lama

// const hero = document.querySelector('.hero');
// const main = document.querySelector('main');
// const drawer = document.querySelector('#drawer');
// const checkbox = document.querySelector('#openMenu');

// let restaurantElement = '';
// data.restaurants.forEach((resto) => {
//   restaurantElement += `
//   <article class="post-item">
//   <img class="post-item__thumbnail" src="${resto.pictureId}"
//     alt="${resto.name}">
//   <div class="post-item__content">
//     <p class="post-item__date">${resto.city} -<a href="#" class="post-item__date__author">${resto.rating}</a>
//     </p>
//     <h1 class="post-item__title"><a href="#">${resto.name}</a></h1>
//     <p class="post-item__description">${resto.description}</p>
//     <div class="footer">
//       <p class="post-item__description">Contact:</p>
//       <div class="row">
//         <a href="#"><i class="fa fa-facebook"></i></a>
//         <a href="#"><i class="fa fa-instagram"></i></a>
//         <a href="#"><i class="fa fa-youtube"></i></a>
//         <a href="#"><i class="fa fa-twitter"></i></a>
//       </div>
//     </div>
//   </div>
// </article>
//   `;
// });

// document.querySelector('.posts').innerHTML = restaurantElement;

// document.addEventListener('keyup', function (e) {
//   if (e.keyCode == 32 || e.keyCode == 13) {
//     drawer.classList.toggle('open');
//     if (checkbox.checked == true) {
//       checkbox.checked = false;
//     } else {
//       checkbox.checked = true;
//     }
//   }
// });

// checkbox.addEventListener('click', function () {
//   drawer.classList.toggle('open');
//   event.stopPropagation();
// });

// hero.addEventListener('click', function () {
//   drawer.classList.remove('open');
//   checkbox.checked = false;
// });

// main.addEventListener('click', function () {
//   drawer.classList.remove('open');
//   checkbox.checked = false;
// });
