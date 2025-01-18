import styles from './LandingPage.module.css'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Features from '../Components/Features'
import UserFeatures from '../Components/UserFeatures'
import Footer from './Footer'

import Testimonials from '../Components/Testimonials'

export default function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <Hero />
      <UserFeatures/>
      <Features />
      <Testimonials/>
      <Footer />
    </div>
  )
}

