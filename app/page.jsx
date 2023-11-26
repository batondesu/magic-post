import Header from './HomePage/Header'
import Hero from './HomePage/Hero'
import Features from './HomePage/Features'
import HowWeWork from './HomePage/HowWeWork'
import Complex from './HomePage/Complex'
import Feedback from './HomePage/Feedback'
import Footer from './HomePage/Footer';

export default function Home() {
  return (
    <div class="main">
      <Header />
      <Hero />
      <Features />
      <HowWeWork />
      <Complex />
      <Feedback />
      <Footer />
    </div>
  )
}
