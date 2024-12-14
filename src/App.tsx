import { RouteObject, createBrowserRouter, RouterProvider } from 'react-router-dom';
import registerRoutes from './routes/RegisterRoutes';

const mainRoutes: RouteObject[] = [
  ...registerRoutes
];

const router = createBrowserRouter(mainRoutes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;