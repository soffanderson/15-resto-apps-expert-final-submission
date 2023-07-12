import Restaurant from '../views/pages/restaurant';
import Upcoming from '../views/pages/upcoming';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Restaurant, // default page
  '/restaurant': Restaurant,
  '/upcoming': Upcoming,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
