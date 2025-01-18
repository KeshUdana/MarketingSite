import Image from 'next/image';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <Image
        className={styles.loginPageChild}
        alt="Vector Decoration"
        src="/images/Vector 6.png"
        width={100} // Set appropriate width
        height={100} // Set appropriate height
      />
      <div className={styles.homeAboutUs}>
        Home About Us Login Contact Us
      </div>
      <Image
        className={styles.component1Icon}
        alt="Component 1"
        src="/images/Component 1.png"
        width={300} // Adjust width based on your design
        height={150} // Adjust height based on your design
      />
      <Image
        className={styles.loginPageItem}
        alt="Group Image"
        src="/images/Group 5.png"
        width={200}
        height={100}
      />
      <Image
        className={styles.loginPageInner}
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
        className={styles.loginPageChild1}
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
        <div className={styles.welcomeBackWrapper}>
          <div className={styles.welcomeBack}>Welcome back!</div>
        </div>
        <div className={styles.enterYourCredentials}>
          Enter your Credentials to access your account
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.nameWrapper}>
            <div className={styles.name}>Name</div>
          </div>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.nameWrapper}>
            <div className={styles.name}>Email address</div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.nameFrame}>
              <div className={styles.name}>Enter your email</div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.nameWrapper}>
            <div className={styles.name}>Password</div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.nameFrame}>
              <div className={styles.name}>Name</div>
            </div>
          </div>
        </div>
        <div className={styles.rememberFor30DaysParent}>
          <div className={styles.rememberFor30}>Remember for 30 days</div>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.dontHaveAnAccountSignUpWrapper}>
          <div className={styles.dontHaveAnContainer}>
            <span className={styles.dontHaveAn}>
              {`Don’t have an account? `}
            </span>
            <a href="/sign-up"><span className={styles.signUp}>Sign Up</span></a>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.frameParent2}>
            <div className={styles.nameWrapper3}>
              <div className={styles.name5}>Name</div>
            </div>
            <div className={styles.frameItem} />
          </div>
          <b className={styles.login}>Login</b>
        </div>
        <div className={styles.forgotPassword}>forgot password</div>
      </div>
    </div>
  );
};

export default LoginPage;
