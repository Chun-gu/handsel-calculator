import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components';
import { DepositCalculator, HandselCalculator } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <HandselCalculator /> },
      { path: '/deposit', element: <DepositCalculator /> },
    ],
  },
]);

export default router;
