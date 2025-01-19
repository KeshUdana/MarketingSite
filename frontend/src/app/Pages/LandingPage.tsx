import styles from './LandingPage.module.css';
import Hero from '../Components/Hero';
import Features from '../Components/Features';
import UserFeatures from '../Components/UserFeatures';
import Footer from './Footer';
import Testimonials from '../Components/Testimonials';

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

      {/* Team Section */}
      <section id="Team">
        <Testimonials />
      </section>
    </div>
  );
}
