"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Nav.module.css";
import { FaBars } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";

function Nav() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [openDropmenu, setOpenDropmenu] = useState(null);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const toggleDropmenu = (menu) => {
    setOpenDropmenu(openDropmenu === menu ? null : menu);
  };

  return (
    <div className={styles.mainContainer}>
      <nav className={styles.navContainer}>
        <div className={styles.logocontainer}>
          <Link href="/">
            <Image
              className={styles.logo}
              src='/whiteLogo.png'
              alt="interior-designer Logo"
              width={92}
              height={87}
              priority
            />
          </Link>
        </div>


        <div className={`${styles.links} flex`}>
          <Link className={`${styles.link} menuItem`} href="/">
            Home
          </Link>
          <Link className={`${styles.link} menuItem`} href="/">
            About
          </Link>
          <Link className={`${styles.link} menuItem`} href="/">
            Service
          </Link>
          <Link className={`${styles.link} menuItem`} href="/">
          Portfolio
          </Link>
          <Link className={`${styles.link} menuItem`} href="/">
            Contact us
          </Link>
        </div>


      </nav>
      <nav className={styles.navMobileContainer}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/whiteLogo.png"
              alt="interior-designer Logo"
              width={72}
              height={65}
              priority
            />
          </Link>
        </div>
        <div className={styles.menuIcon} onClick={toggleSidebar}>
          <FaBars />
        </div>
        <div
          className={`${styles.sidebar} ${
            showSidebar ? styles.showSidebar : ""
          }`}
        >
          <div className={styles.closeIcon} onClick={closeSidebar}>
            <IoIosCloseCircle />
          </div>
          <div className={styles.links}>
          <Link className={`${styles.link} menuItem`} href="/">
            Home
          </Link>
          <Link className={`${styles.link} menuItem`} href="/">
            About
          </Link>
          <Link className={`${styles.link} menuItem`} href="/">
            Service
          </Link>
          <Link className={`${styles.link} menuItem`} href="/">
            Contact us
          </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
