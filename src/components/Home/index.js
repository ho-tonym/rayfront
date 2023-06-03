import React from 'react'
// import PropTypes from 'prop-types'
import coverImage from '../../assets/img/cover.png'
import styles from './Home.module.css'

const Home = (props) => {
  return (
    <>
      <div className={styles.Home}>
        <img src={coverImage} alt="raymond zhang cover"/>
      </div>
    </>
  )
}

export default Home
