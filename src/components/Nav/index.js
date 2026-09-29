// import PropTypes from 'prop-types'
import styles from './Nav.module.css'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/img/logo.png"

import React, { useState, useEffect }  from 'react'

const Nav = (props) => {
  const location = useLocation()
  const [open, toggle] = useState(false)

  // Close menu automatically on route change
  useEffect(() => {
    toggle(false)
  }, [location.pathname])

  // Lock body scroll when mobile menu is open or on root page
  useEffect(() => {
    if (open || location.pathname === '/') {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open, location.pathname])

  const toggleMenu = () => {
    toggle(prev => !prev)
  }

  const closeMenu = () => {
    toggle(false)
  }

  return (
    <>
      <div className={`${styles.overlay} ${open ? styles.overlayOpen : ''}`}>
        <div className={styles.overlayContent}>
          <Link to="/" onClick={closeMenu}>
            <h2>Home</h2>
          </Link>
          <Link to="/about" onClick={closeMenu}>
            <h2>About</h2>
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            <h2>Contact</h2>
          </Link>
          <a
            href="https://www.instagram.com/raymond_magic"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <h2>Instagram</h2>
          </a>
        </div>
      </div>

      <div className={`${styles.Nav} ${open ? styles.navOpen : ''}`}>
        <section className={styles.NavContent}>
          <section>
            <Link to="/about">
              <p>About</p>
            </Link>
            <Link to="/contact">
              <p>Contact</p>
            </Link>
          </section>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="logo" />
          </Link>
          <section>
            <a
              href="https://www.instagram.com/raymond_magic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Instagram</p>
            </a>
          </section>
        </section>

        <section className={styles.burgerContent}>
          <button
            type="button"
            className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
            onClick={toggleMenu}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
          >
            <div className={styles.bars}></div>
            <div className={styles.bars}></div>
            <div className={styles.bars}></div>
          </button>

          <Link to="/" className={`${styles.logo} ${styles.burgerLogo}`} onClick={closeMenu}>
            <img src={logo} alt="logo" />
          </Link>
        </section>
      </div>
    </>
  )
}

export default Nav

