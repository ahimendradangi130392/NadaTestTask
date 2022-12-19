import { QueryClientProvider, QueryClient } from 'react-query'
import { withProfiler } from '@sentry/react'
import { BrowserRouter } from 'react-router-dom'

import AppRoutes from 'routes'
import './App.css'
import { AxiosInterceptor } from 'services/axiosinstance'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AxiosInterceptor>
          <AppRoutes />
        </AxiosInterceptor>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default withProfiler(App)
