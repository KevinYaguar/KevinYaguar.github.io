import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/dist/cosmo/bootstrap.min.css'
import '../global.css'
import '../i18n/i18n'
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
      }, []);
    return <Component {...pageProps} />
}