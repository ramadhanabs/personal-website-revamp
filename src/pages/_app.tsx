import "@/styles/globals.css"
import type { AppProps } from "next/app"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Footer from "@/components/elements/Footer"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
