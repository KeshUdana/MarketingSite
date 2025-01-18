import styles from './LandingPage.module.css'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Features from '../Components/Features'
import Footer from './Footer'

import Testimonials from '../Components/Testimonials'

export default function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <Header />
      <Hero />
      <Features />
      <Testimonials/>
      <Footer />
    </div>
  )
}

