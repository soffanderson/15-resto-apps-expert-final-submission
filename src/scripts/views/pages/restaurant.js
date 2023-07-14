/* eslint-disable max-len */
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestoItemTemplate } from '../templates/template-creator';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

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

export default Restaurant;
