// import PropTypes from 'prop-types'
import styles from './Nav.module.css'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/img/logo.png"

import React, { useState, useEffect }  from 'react'
import { useSpring, animated } from 'react-spring'
import useMeasure from './useMeasure'

const Nav = (props) => {
  const location = useLocation()
  const [open, toggle] = useState(false)
  const [bind, { height }] = useMeasure()
  const animProps = useSpring({ height: open ? "100%" : "0%" })

  useEffect(() => {
    if (location.pathname === '/') {
      document.body.style.overflow = "hidden";
    }else{
      document.body.style.overflow = "auto";
    }
  }, [location.pathname])

  return (
    <>
    <animated.div {...bind} className={styles.overlay} style={animProps}>
      <div className={styles.overlayContent}>
        <Link to="/" onClick={() => toggle(false)}>
          <h2>Home</h2>
        </Link>
        <Link to="/about" onClick={() => toggle(false)}>
          <h2>About</h2>
        </Link>
        <Link to="/contact" onClick={() => toggle(false)}>
          <h2>Contact</h2>
        </Link>
        <a href="https://facebook.com/Raymond-Zhang-Magic-579400302706836/" onClick={() => toggle(false)}>
          <h2>Facebook</h2>
        </a>
        <a href="https://www.instagram.com/raymondzhangmagic/" onClick={() => toggle(false)}>
          <h2>Instagram</h2>
        </a>
      </div>
      <button type="button" className={styles.closeBtn} onClick={() => toggle(false)}><p>&times;</p></button>
    </animated.div>
    <div className={styles.Nav}>
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
          <a href="https://facebook.com/Raymond-Zhang-Magic-579400302706836/">
            <p>Facebook</p>
          </a>
          <a href="https://www.instagram.com/raymondzhangmagic/">
            <p>Instagram</p>
          </a>
        </section>



      </section>
      <section
        className={styles.burgerContent}
      >
      <div className={styles.burger} onClick={() => toggle(true)}>
        <div className={styles.bars}></div>
        <div className={styles.bars}></div>
        <div className={styles.bars}></div>
      </div>

      <Link to="/" className={`${styles.logo} ${styles.burgerLogo}`}>
        <img src={logo} alt="logo" />
      </Link>
    </section>
    </div>
    </>
  )
}

export default Nav
//display none if small screen width - burger
