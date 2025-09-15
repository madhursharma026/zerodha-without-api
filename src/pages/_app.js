import '@/styles/globals.css'
import '@/styles/theme.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './Layout'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

  return <>{getLayout(<Component {...pageProps} />)}</>
}
