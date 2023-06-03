import React from 'react'
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'
import styles from "./About.module.css"
import signature from "../../assets/img/signature.png"
import about from "../../assets/img/about.png"

const About = (props) => {
  return (
    <div className={styles.About}>
      <section className={styles.image}>
        <img src={about} alt="raymond zhang"/>
      </section>
      <section className={styles.text}>
        <p style={{margin: 0}}>Hello friends,</p>
        <p>I’m a magician based in New York City who believes in making every moment in life memorable. </p>
        <p>Life can be a struggle in New York City and I sometimes find it hard to be connected to the present moment and to those around me. And then I discovered magic. Magic has the power to transport people and bring them together. I’ve designed my brand of magic to connect people in a way that’s interactive, personal, and fun! </p>
        <p>For over a decade, I’ve vanished coins and morphed playing  cards two feet away from my audience’s eyes. Each time, I get to witness a sense of wonder and imaginations come to life—the feeling I get is the same as the very first time! </p>
        <p>It would be my honor to orchestrate these experiences for you and elevate your event into something beautiful and magical. </p>

        <p>With love,</p>
        <img src={signature} alt="signature"/>

        <p>Interested in working together? <b><Link to="/contact">Contact me</Link></b> for any events or collaboration.</p>
      </section>
    </div>
  )
}

export default About
