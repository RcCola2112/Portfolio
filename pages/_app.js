import '../styles/globals.css'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }){
  // ensure body background matches theme variable
  useEffect(()=>{
    const setBg = ()=>{
      document.body.style.background = 'var(--bg)'
    }
    setBg()
  },[])

  return <Component {...pageProps} />
}
