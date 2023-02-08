import '../styles/globals.css';
import '../styles/animations.scss';
import '../styles/pagination.scss';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import dynamic from 'next/dynamic';
import Head from 'next/head';
const BgTheme = dynamic(() => import('../components/background/BgTheme'), {
  ssr: false
});
import Layout from '../layouts/Layout';
import Loading from '../components/ui/loading/Loading';
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeStart', () => setLoading(true));
    router.events.on('routeChangeComplete', () => setLoading(false));
    router.events.on('routeChangeError', () => setLoading(false));
    return () => {
      router.events.off('routeChangeStart', () => setLoading(true));
      router.events.off('routeChangeComplete', () => setLoading(false));
      router.events.off('routeChangeError', () => setLoading(false));
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>NUBI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/deathStar.png" />
      </Head>
      <ThemeProvider enableSystem={false} attribute="class">
        <BgTheme />
        <Layout>
          {loading && <Loading />}
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
