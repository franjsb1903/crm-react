import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from '../components/Layout'

import NewClient, { action as actionNewClient } from '../pages/NewClient'
import Index, { loader as clientsLoader } from '../pages/Index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientsLoader,
      },
      {
        path: '/clients/new',
        element: <NewClient />,
        action: actionNewClient,
      },
    ],
  },
])

export default router
