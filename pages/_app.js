import '../styles/globals.css'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar/>
      <Component {...pageProps} />
      <div style={{height: '10vh', width: '100vw'}}></div>
    </>
  )
}

export default MyApp
