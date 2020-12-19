import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Head from 'next/head'

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


export default function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Yashvi Jaju</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="author" content="Yashvi Jaju"/>
        <meta name="keywords" content="Portfolio, Computer Science Business Administration, Yashvi Jaju"/>
        <meta name="description" content="Yashvi Jaju is pursuing Computer Science and Business Administration at the University of Southern California, with a minor in Entrepreneurship. Over the years, she has founded startups, developed software products, and created digital and traditional art"/>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <NavBar/>
        <Component {...pageProps} />
        <div style={{height: '10vh', width: '100vw'}}></div>
      </ThemeProvider>
    </React.Fragment>
  );
  
  // return (
  //   <>
  //     <Head>
  //       <title>Yashvi Jaju</title>
  //       <link rel="icon" href="/favicon.ico"/>
  //       <meta name="author" content="Yashvi Jaju"/>
  //       <meta name="keywords" content="Portfolio, Computer Science Business Administration, Yashvi Jaju"/>
  //       <meta name="description" content="Yashvi Jaju is pursuing Computer Science and Business Administration at the University of Southern California, with a minor in Entrepreneurship. Over the years, she has founded startups, developed software products, and created digital and traditional art"/>
  //     </Head>
  //     <NavBar/>
  //     <Component {...pageProps} />
  //     <div style={{height: '10vh', width: '100vw'}}></div>
  //   </>
  // )
}
