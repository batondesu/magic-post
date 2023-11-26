import './HomePage/assets/css/animate.min.css'
import './HomePage/assets/css/slick.css'
import './HomePage/assets/css/tailwind-built.css'

// import Home from './page'
import Header from './HomePage/header'
import Hero from './HomePage/hero'
import Features from './HomePage/features'
import Work from './HomePage/work'
import Search from './HomePage/search'
import Footer from './HomePage/footer'
import Trial from './HomePage/trial'

import Script from 'next/script'

export default function RootLayout() {
  return (
    <html lang="en">
      <body className="bg-white text-body font-body">
        <div class="main">
          <Header />
          <Hero />
          <Search />
          <Features />
          <Work />
          <Trial />
          <Footer />
        </div>
        <Script data-cfasync="false" src="./HomePage/assets/js/vendor/email-decode.min.js"></Script>
        <Script src="./HomePage/assets/js/vendor/modernizr-3.6.0.min.js"></Script>
        <Script src="./HomePage/assets/js/vendor/jquery-3.6.0.min.js"></Script>
        <Script src="./HomePage/assets/js/vendor/waypoints.js"></Script>
        <Script src="./HomePage/assets/js/vendor/counterup.js"></Script>
        <Script src="./HomePage/assets/js/vendor/slick.js"></Script>
        <Script src="./HomePage/assets/js/vendor/wow.js"></Script>
        <Script src="./HomePage/assets/js/vendor/scrollup.js"></Script>
        <Script src="./HomePage/assets/js/vendor/smooth.js"></Script>
        <Script src="./HomePage/assets/js/vendor/textType.js"></Script>
        <Script src="./HomePage/assets/js/vendor/mobile-menu.js"></Script>
        <Script src="./HomePage/assets/js/main.js"></Script>
        <a id="scrollUp" href="#top" style={{ position: 'fixed', zIndex: '2147483647' }}>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </a>
      </body>
    </html>
  )
}
