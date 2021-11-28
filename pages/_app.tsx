import '../styles/sass/index.scss'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './component/layout'
import { Provider, Client } from 'urql'



function MyApp({ Component, pageProps }: AppProps) {

  let client = new Client({
    url: 'https://ssc-batch-server.herokuapp.com/graphql',
  })

  return (
    <Provider value={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )

}

export default MyApp
