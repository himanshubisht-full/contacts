import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from 'App'
import { store } from 'store'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

const queryClient = new QueryClient()

root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
)
