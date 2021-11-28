import '../styles/sass/index.scss'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './component/layout'
import { Provider, Client } from 'urql'
console.log(process.env.DEVELOPMENT);

let client = new Client({
  url: process.env.URL!,
})

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider value={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )

}

export default MyApp
