import Image from 'next/image'
import styles from '../Pages/LandingPage.module.css'

export default function Hero() {
  return (
    <section className={`${styles.heroSection} bg-white relative`} >
      <div className={`${styles.heroContent} max-w-7xl mx-auto px-6 md:px-12`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className={`${styles.heroTitle} text-[#333]`}>
              <span className="block font-bold">Experience Fashion </span>
              <span className="block font-normal">like never before</span>
            </h1>
            <Image
                src="/images/Vector 4.png"
                alt="Decoration"
                width={291}
                height={200}
                className="block -translate-y-10"
              />
            <p className={`${styles.heroDescription} text-[#666]`}>
Join as ,as we use AI to take your shopping and fashion experience to the next level            </p>
            
          </div>
          <div className="relative">
            <Image
              src="/images/Group 5.jpg"
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

