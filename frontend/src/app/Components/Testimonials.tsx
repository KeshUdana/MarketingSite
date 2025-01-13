import Image from 'next/image'
import styles from '../Pages/LandingPage.module.css'

export default function Testimonials() {
  return (
    <section className={styles.AboutSection}>
      <div className={styles.AboutContent}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className={styles.AboutTitle}>
              <span>About Us
                </span> <span>What is Modde?</span>
            </h1>
            <p className={styles.AboutDescription}>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              <br></br>
              <br></br>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            
            <button className={styles.ctaButton}>
              Explore More
            </button>
          </div>
          <div className="relative">
            <Image
              src="/images/Group 6.png"
              alt="Hero Image"
              width={700}
              height={700}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      
    </section>
  )
}

