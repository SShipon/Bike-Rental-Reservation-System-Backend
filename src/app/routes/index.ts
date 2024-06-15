import { Router } from 'express';
import { userRoutes } from '../modules/user/user.route';
import { bikeRoutes } from '../modules/bike/bike.route';
import { rentalRoutes } from '../modules/rental/rental.route';


const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },

  {
    path: '/bikes',
    route: bikeRoutes,
  },

  {
    path: '/rentals',
    route: rentalRoutes,
  },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
