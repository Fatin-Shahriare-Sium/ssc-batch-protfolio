import '../styles/sass/index.scss'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './component/layout'
import { Provider, Client } from 'urql'
import useUrl from './component/useUrl'
console.log(process.env.DEVELOPMENT);


function MyApp({ Component, pageProps }: AppProps) {
  let { url } = useUrl()

  let client = new Client({
    url: url,
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
