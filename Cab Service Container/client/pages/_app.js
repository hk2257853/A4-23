import '../styles/globals.css'
import Nav from '../components/Nav'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
  return ( 
    <>
      <Nav />
      <ToastContainer/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
