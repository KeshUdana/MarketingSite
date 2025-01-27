import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Image
              src="/images/Component 2.png"
              alt="Modde Marketing"
              width={100}
              height={100}
              className="mb-6"
            />
            <p className="text-[#f4f4f4] max-w-md mt-6 pt-2 pb-4">
              Modde is dedicated to helping brands build meaningful connections with their audiences.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">GET IN TOUCH</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email"
                className={styles.emailInput}
              />
              <button className={styles.sendButton}>
                send
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
