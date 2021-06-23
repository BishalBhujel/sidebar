import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import "../assets/plugins/nucleo/css/nucleo.css";
import Allcomponent from '../components/Allcomponent';

function MyApp({ Component, pageProps }) {
  return (
      <Allcomponent>
        <Component {...pageProps} />
      </Allcomponent>
  );
}

export default MyApp 