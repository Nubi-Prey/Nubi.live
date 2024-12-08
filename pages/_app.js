import Head from 'next/head'
import './style.css'

export default function MyApp({ Component, pageProps }) {
    
    return (
        <>
            <Head>
                <link rel='shortcut icon' href='/favicon.svg'/>
            </Head>
            <Component {...pageProps}/>
        </>
    )
        
  }