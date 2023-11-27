// import Home from './page'
import React from 'react'
import Header from './HomePage/header'
import Hero from './HomePage/hero'
import Features from './HomePage/features'
import Work from './HomePage/work'
import Search from './HomePage/search'
import Footer from './HomePage/footer'
import Trial from './HomePage/trial'

import Script from 'next/script'

import './HomePage/assets/css/tailwind-built.css'

export default function Home() {
  return (
    <body className="bg-white text-body font-body">
        <Header/>
        
        <div className="main">
          <Hero />
          <Search />
          <Features />
          <Work />
          <Trial />
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
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </a>
        <Footer /> 
    </body>
  )
}
