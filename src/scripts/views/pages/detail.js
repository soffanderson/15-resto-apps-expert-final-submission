/* eslint-disable no-undef */
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <section class="content">
        <div id="anime-list" class="movie">
        </div>
        <div id="likeButtonContainer"></div>
      </section>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantDbSource.detailResto(url.id);
    console.log(restaurant);
    const restaurantContainer = document.querySelector('#anime-list');
    restaurantContainer.innerHTML = createRestoDetailTemplate(restaurant);

    const resto = await TheRestaurantDbSource.detailResto(url.id);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto?.id,
        pictureId: resto?.pictureId,
        name: resto?.name,
        description: resto?.description,
        city: resto?.city,
        rating: resto?.rating,
      },
    });
  },
};

export default Detail;
