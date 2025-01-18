import Image from 'next/image';
import styles from './SignInPage.module.css';
import { FunctionComponent } from 'react';

const SignInPage: FunctionComponent = () => {
  return (
    <div className={styles.signInPage}>
      <Image
        className={styles.signInPageChild}
        alt="Vector Decoration"
        src="/images/Vector 6.png"
        width={100}
        height={100}
      />
      <div className={styles.homeAboutUs}>
        Home About Us Login Contact Us
      </div>
      <Image
        className={styles.component1Icon}
        alt="Component 1"
        src="/images/Component 1.png"
        width={300}
        height={150}
      />
      <Image
        className={styles.signInPageItem}
        alt="Group Image"
        src="/images/Group 5.png"
        width={300}
        height={300}
      />
      <Image
        className={styles.signInPageInner}
        alt="Ellipse Decoration"
        src="/images/Ellipse 8.png"
        width={200}
        height={200}
      />
      <Image
        className={styles.ellipseIcon}
        alt="Ellipse Decoration"
        src="/images/Ellipse 9.png"
        width={200}
        height={200}
      />
      <Image
        className={styles.signInPageChild1}
        alt="Ellipse Decoration"
        src="/images/Ellipse 10.png"
        width={200}
        height={200}
      />
      <Image
        className={styles.icon}
        alt="Icon 1"
        src="/images/12967496761553233092 (1) 2.png"
        width={50}
        height={50}
      />
      <Image
        className={styles.icon1}
        alt="Icon 2"
        src="/images/14459920111530103316 2.png"
        width={50}
        height={50}
      />
      <Image
        className={styles.icon2}
        alt="Icon 3"
        src="/images/16304616191553750378 2.png"
        width={50}
        height={50}
      />
      <Image
        className={styles.vectorIcon}
        alt="Vector Icon"
        src="/images/Vector 13.png"
        width={100}
        height={100}
      />
      <div className={styles.frameParent}>
        <div className={styles.getStartedWithModdeWrapper}>
          <div className={styles.getStartedWith}>Get started with Modde!</div>
        </div>
        <div className={styles.signUpToSellOnModdeParent}>
          <div className={styles.signUpTo}>Sign up to sell on Modde</div>
          <div className={styles.weAreLooking}>
            We are looking for Sri Lankan brands and sellers who share our passion for delivering quality products and exceptional customer experiences. If that sounds like you, we’d love for you to apply!
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.nameWrapper}>
          <div className={styles.name}>Name</div>
        </div>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.enterYourFirst}>Enter your first name here</div>
      <div className={styles.signInPageChild2} />
      <div className={styles.signInPageChild3} />
      <div className={styles.signInPageChild4} />
      <div className={styles.signInPageChild5} />
      <div className={styles.signInPageChild6} />
      <div className={styles.signInPageChild7} />
      <div className={styles.signInPageChild8} />
      <div className={styles.signInPageChild9} />
      <div className={styles.enterYourLast}>Enter your last name here</div>
      <div className={styles.signInPageChild10} />
      <div className={styles.enterYourEMail}>Enter your e-mail address</div>
      <div className={styles.enterCompanyName}>Enter company name</div>
      <div className={styles.enterCompanyWebsite}>
        {`Enter company website `}
      </div>
      <div className={styles.firstName}>First Name *</div>
      <div className={styles.jobTitle}>Job Title *</div>
      <div className={styles.mobileNumber}>Mobile number *</div>
      <div className={styles.companyName}>Company Name *</div>
      <div className={styles.doYouOperate}>
        Do you operate and fulfill your products from the Sri Lanka? Modde
        Marketplace is open only to Sri lankan based sellers.
      </div>
      <div className={styles.whatIsYour}>
        What is your company's annual revenue in the Sri Lanka?*
      </div>
      <div className={styles.pleaseTakeAContainer}>
        <p className={styles.pleaseTakeAMomentToReview}>
          Please take a moment to review Modde
          <a
            className={styles.sSellerPrivacy}
            href="https://us.shein.com/global-seller-privacy-notice-a-1843.html"
            target="_blank"
          >
            's Seller Privacy Notice
          </a>
          .
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.pleaseTakeAMomentToReview}>
          I have read and agree to Modde's Seller Privacy Notice.*
        </p>
      </div>
      <div className={styles.companyWebsite}>{`Company Website `}</div>
      <div className={styles.emailAddress}>Email address *</div>
      <div className={styles.lastName}>Last Name *</div>
      <div className={styles.rectangle12variant3}>
        <div className={styles.rectangle12variant3Child} />
      </div>
      <div className={styles.button}>
        <div className={styles.buttonChild} />
        <b className={styles.getStarted}>Get Started</b>
        <div className={styles.buttonItem} />
        <div className={styles.getStarted1}>SUBMIT</div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.loremIpsumHas}>
          Lorem Ipsum has been the industry's standard dummy text ever since
          the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </div>
        <div className={styles.footerItem} />
        <div className={styles.footerInner} />
        <div className={styles.getInTouch}>GET IN TOUCH</div>
        <div className={styles.enterYourEmail}>Enter Your Email</div>
        <div className={styles.send}>{`send `}</div>
        <Image
          className={styles.component2Icon}
          alt="Footer Component"
          src="/images/Component 2.png"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.enterYourPosition}>
        Enter your position on your company
      </div>
    </div>
  );
};

export default SignInPage;
