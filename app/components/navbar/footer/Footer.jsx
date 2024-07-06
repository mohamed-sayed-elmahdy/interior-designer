import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaBehance } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.rightContent}>
        <h1>Contact Us</h1>
        <p>
          For cooperation, advertising, suppliers, contractors proposals, and
          just if you have any questions for us.
        </p>
        <div className={styles.logocontainer}>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/logo.png"
              alt="interior-designer Logo"
              width={92}
              height={87}
              priority
            />
          </Link>
        </div>
      </div>
      <div className={styles.leftContent}>
        <div className={styles.phone}>
          <div className={styles.phoneNumber}>
            <span>General inquiries:</span> <span>+9 018887579</span>
          </div>
          <div className={styles.phoneNumber}>
            <span>Miami:</span> <span>+9 018887579</span>
          </div>
        </div>
        <div className={styles.scoialMedia}>
          <div className={styles.email}>shddesign@hmail.com</div>
          <div className={styles.scoialMediaIcons}>
            <FaBehance className={styles.icon} />
            <FaFacebookF className={styles.icon} />
            <AiFillInstagram className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
