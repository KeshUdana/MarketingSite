import Image from 'next/image'
import styles from '../Pages/LandingPage.module.css'

export default function Hero() {
  return (
    <section className={`${styles.heroSection} bg-white relative`} >
      <div className={`${styles.heroContent} max-w-7xl mx-auto px-6 md:px-12`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className={`${styles.heroTitle} text-[#333]`}>
              <span className="block font-bold">We Help you </span>
              <span className="block font-normal">to grow your</span>
              <span className="block font-normal">Business</span>
            </h1>
            <Image
                src="/images/Vector 4.png"
                alt="Decoration"
                width={291}
                height={200}
                className="block -translate-y-10"
              />
            <p className={`${styles.heroDescription} text-[#666]`}>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <button className={`${styles.ctaButton} shadow-lg`}>
              GET STARTED
            </button>
          </div>
          <div className="relative">
            <Image
              src="/images/Group 5.png"
              alt="Hero Image"
              width={0}
              height={0}
              sizes='100vw'
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

