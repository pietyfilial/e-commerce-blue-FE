import CategoryPage from '../pages/CategoryPage/CategoryPage';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage';
import ProductPage from '../pages/ProductPage/ProductPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';

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
    path: '/category',
    page: CategoryPage,
  },
  {
    path: '/product-detail',
    page: ProductDetailPage,
  },
  {
    path: '/login',
    page: LoginPage,
  },
  {
    path: '/register',
    page: RegisterPage,
  },
  {
    path: '*',
    page: NotFoundPage,
  },
];
