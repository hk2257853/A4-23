import '../styles/globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
  <ToastContainer/>
  return <Component {...pageProps} />
}

export default MyApp
