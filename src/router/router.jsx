import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from '../components/Layout'
import ErrorPage from '../components/ErrorPage'
import { action as actionDeleteClient } from '../components/table/TableRow'

import Index, { loader as loaderClients } from '../pages/Index'
import NewClient, { action as actionNewClient } from '../pages/NewClient'
import EditClient, {
  loader as loaderEditClient,
  action as actionEditClient,
} from '../pages/EditClient'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: loaderClients,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clients/new',
        element: <NewClient />,
        action: actionNewClient,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clients/edit/:id',
        element: <EditClient />,
        loader: loaderEditClient,
        action: actionEditClient,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clients/delete/:id',
        action: actionDeleteClient,
      },
    ],
  },
])

export default router
