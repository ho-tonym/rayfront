import React, {useEffect, useRef} from 'react'
// import PropTypes from 'prop-types'
import vid from "../../assets/video/loadAnim.mp4"
import styles from "./Video.module.css"

const Video = () => {
  const vidRef = useRef()
  useEffect(() => {
    console.log(vidRef.current.play)
    vidRef.current.play()
  }, [])
  return (
    <section className={styles.Video}>
      <video ref={vidRef} autoplay={true} autoPlay muted src={vid} type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
    </section>
  )
}

export default Video
