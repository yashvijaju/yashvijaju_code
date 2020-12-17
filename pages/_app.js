import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Yashvi Jaju</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Yashvi Jaju">
        <meta name="keywords" content="Portfolio, Computer Science Business Administration, Yashvi Jaju">
        <meta name="description" content="Yashvi Jaju is pursuing Computer Science and Business Administration at the University of Southern California, with a minor in Entrepreneurship. Over the years, she has founded startups, developed software products, and created digital and traditional art">
      </Head>
      <NavBar/>
      <Component {...pageProps} />
      <div style={{height: '10vh', width: '100vw'}}></div>
    </>
  )
}

export default MyApp
