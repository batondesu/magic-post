import Header from './HomePage/header'
import Hero from './HomePage/hero'
import Features from './HomePage/features'
import Work from './HomePage/work'
import Search from './HomePage/search'
import Footer from './HomePage/footer'
import Trial from './HomePage/trial'

export default function Home() {
  return (
    <div class="main">
      <Header />
      <Hero />
      <Features />
      <Work />
      <Search />
      <Trial />
      <Footer />
    </div>
  )
}
