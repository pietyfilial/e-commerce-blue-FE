import HomePage from '../pages/HomePage/HomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import ProductPage from '../pages/ProductPage/ProductPage';

export const routes = [
  {
    path: '/',
    page: HomePage,
  },

  {
    path: '/order',
    page: OrderPage,
  },

  {
    path: '/product',
    page: ProductPage,
  },
  {
    path: '*',
    page: NotFoundPage,
  },
];
