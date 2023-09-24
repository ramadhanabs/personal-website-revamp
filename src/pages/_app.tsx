import "@/styles/globals.css"
import type { AppProps } from "next/app"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Footer from "@/components/elements/Footer"
import { Toaster } from "react-hot-toast"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
      <Footer />
    </>
  )
}
