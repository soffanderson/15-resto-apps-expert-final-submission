import TheRestaurantDbSource from '../../data/therestaurantdb-source';

const Upcoming = {
  async render() {
    return `
      <section class="content">
        <h2 class="content__heading">Restaurant List</h2>
        <div id="anime-list" class="posts">
        </div>
      </section>
        `;
  },

  async afterRender() {
    const restaurant = await TheRestaurantDbSource.upcomingResto();
    console.log(restaurant);
  },
};

export default Upcoming;
