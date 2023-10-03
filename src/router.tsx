import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components';
import { HandselCalculator } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '/', element: <HandselCalculator /> }],
  },
]);

export default router;
