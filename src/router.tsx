import { createBrowserRouter } from 'react-router-dom'
import ContactPage from 'pages/contact'
import ChartsAndMaps from 'pages/chartsAndMaps'
import ContactForm from 'pages/ContactForm'
import Root from 'components/Root'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <ContactPage />,
      },
      {
        path: 'contact-form',
        element: <ContactForm />,
      },
      {
        path: 'charts',
        element: <ChartsAndMaps />,
      },
    ],
  },
])
