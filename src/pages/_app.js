// src/pages/_app.js
import '@/styles/globals.css'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import AOS from 'aos'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 })
  }, [])

  return <Component {...pageProps} />
}
