import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
  return ( 
    <>
      <Layout />
      <ToastContainer/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
