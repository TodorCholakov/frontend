import '@/styles/globals.css'
import { Provider, createClient } from 'urql'
import Head from 'next/head'

const client = createClient({url: process.env.NEXT_PUBLIC_BACKEND_API})

export default function App({ Component, pageProps }) {
  return <Provider value={client}><Component {...pageProps} /><Head>
    <title>Todor Cholakov - nature photography</title>
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-W6EW482D4P"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-W6EW482D4P');
</script>
    </Head></Provider>
}
