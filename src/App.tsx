import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { routes } from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  const noHeaderFooterRoutes = ['*'];
  console.log(noHeaderFooterRoutes);

  const shouldShowHeaderAndFooter = !noHeaderFooterRoutes.some((route) =>
    route === '*'
      ? location.pathname !== '/' &&
        !routes.some((r) => r.path === location.pathname)
      : route === location.pathname
  );

  return (
    <>
      {shouldShowHeaderAndFooter && <Header />}
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.page />}
          />
        ))}
      </Routes>
      {shouldShowHeaderAndFooter && <Footer />}
    </>
  );
}

export default App;
