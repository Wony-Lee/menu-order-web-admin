import wrapper from '../store'
import '../styles/reset.css'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default wrapper.withRedux(MyApp)
