/* eslint-disable max-len */
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Restaurant = {
  async render() {
    return `
      <section class="content">
        <div id="anime-list" class="posts">
        </div>
      </section>
        `;
  },

  async afterRender() {
    const restaurant = await TheRestaurantDbSource.listRestaurants();
    const restaurantContainer = document.querySelector('#anime-list');
    restaurant.forEach((resto) => {
      restaurantContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

// <article class="post-item">
//   <img class="post-item__thumbnail" src="${resto.pictureId}"
//     alt="${resto.name}">
//   <div class="post-item__content">
//     <p class="post-item__date">${resto.city} -<a href="#" class="post-item__date__author">${resto.rating}</a>
//     </p>
//     <h1 class="post-item__title"><a href="#">${resto.name}</a></h1>
//     <p class="post-item__description">${resto.description}</p>
//       <div class="footer">
//         <p class="post-item__description">Contact:</p>
//         <div class="row">
//           <a href="#"><i class="fa fa-facebook"></i></a>
//           <a href="#"><i class="fa fa-instagram"></i></a>
//           <a href="#"><i class="fa fa-youtube"></i></a>
//           <a href="#"><i class="fa fa-twitter"></i></a>
//         </div>
//       </div>
//   </div>
// </article>

export default Restaurant;
