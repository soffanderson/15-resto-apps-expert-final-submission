/* eslint-disable object-curly-newline */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable max-len */
/* eslint-disable no-lone-blocks */
/* eslint-disable indent */
import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
      <h2 class="movie__title">${resto?.name}</h2>
      <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + resto?.pictureId}" alt="${resto?.name}" />
      <div class="movie__info">
        <h3>Information</h3>
        <h4>City:</h4>
          <p>${resto?.city}</p>
        <h4>Address:</h4>
          <p>${resto?.address}</p>
      </div>
      <div class="movie__overview">
        <h3>Description</h3>
          <p>${resto?.description}</p>
        <h4>Foods Menu:</h4>
            <p>
              ${resto?.menus?.foods?.map((el) => `${el?.name}`)?.join(', ')}
            </p>
        <h4>Drinks Menu:</h4>
            <p>
              ${resto?.menus?.drinks?.map((el) => `${el?.name}`)?.join(', ')}
            </p>
        <h4>Customer Reviews:</h4>
            <p>
              ${resto?.customerReviews
                ?.map((el) => `${el?.name}: ${el?.review}<br><span class="customer_reviews">(${el?.date})</span>`)
                ?.join('<br><br>')}
            </p>
      </div>
    `;

const createRestoItemTemplate = (resto) => `
 <article class="post-item">
   <img class="post-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"
     alt="${resto?.name}">
   <div class="post-item__content">
     <p class="post-item__date">${resto.city} -<span class="post-item__date__author">${resto.rating}</span>
     </p>
     <h1 class="post-item__title"><a href="/#/detail/${resto.id}">${resto.name}</a></h1>
     <p class="post-item__description">${resto.description}</p>
       <div class="footer">
         <p class="post-item__description">Contact:</p>
         <div class="row">
           <a href="#"><i class="fa fa-facebook"></i></a>
           <a href="#"><i class="fa fa-instagram"></i></a>
           <a href="#"><i class="fa fa-youtube"></i></a>
           <a href="#"><i class="fa fa-twitter"></i></a>
         </div>
       </div>
   </div>
 </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

{
  /* <div class="movie-item">
  <div class="movie-item__header">
    <img class="movie-item__header__poster" alt="${movie.title}"
         src="${
           movie.backdrop_path
             ? CONFIG.BASE_IMAGE_URL + movie.backdrop_path
             : 'https://picsum.photos/id/666/800/450?grayscale'
         }">
    <div class="movie-item__header__rating">
      <p>⭐️<span class="movie-item__header__rating__score">${movie.vote_average}</span></p>
    </div>
  </div>
  <div class="movie-item__content">
    <h3><a href="/#/detail/${movie.id}">${movie.title}</a></h3>
    <p>${movie.overview}</p>
  </div>
</div> */
}
export { createRestoItemTemplate, createRestoDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate };
