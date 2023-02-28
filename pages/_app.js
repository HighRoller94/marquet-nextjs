import '@/styles/globals.scss'
import store from '@/redux/store'
import Layout from '@/components/Layout'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
