"use client"

import styles from "./LandingPage.module.css"
import Hero from "./Hero"
import Features from "./Features"
import UserFeatures from "./UserFeatures"
import Testimonials from "./Testimonials"
import ReactPlayerComponent from "./video"


export default function LandingPage() {
  return (
    <div className={styles.landingPage}>
      {/* Hero Section */}
      <section id="Hero">
        <Hero />
      </section>

      {/* User Features Section */}
      <section id="UserFeatures">
        <UserFeatures />
      </section>

      {/* Features Section */}
      <section id="Features">
        <Features />
      </section>

      {/* Video Section */}
      <section id="Video" className={styles.videoSection}>
        <ReactPlayerComponent />
      </section>

      {/* Team Section */}
      <section id="Team">
        <Testimonials />
      </section>
    </div>
  )
}

