import React, { useState } from 'react';
import Routes from "./routes"
import styles from "./App.module.css"
import vid from "./loadAnim.mp4"


function App() {
  const [vidStyle, setVidStyle] = useState({
    opacity: 0,
    display: "none",

    overOpacity: 1,
    overDisplay: "block",
  })

  function videoEnded(){
    setVidStyle(prevState => ({
      ...prevState,
      opacity: 0,
    }))

    setTimeout(() => {
      setVidStyle(prevState => ({
        ...prevState,
        display: "none",
      }))
    }, 1500)
  }

  function startVideo(){
    setVidStyle({
      opacity: 1,
      display: "block",
      overOpacity:0,
    })
    setTimeout(() => {
      setVidStyle(prevState => ({
        ...prevState,
        overDisplay: "none"
      }))
    }, 2000)
  }

  return (
    <>
    <div className={styles.overLay}
      style={{
          opacity: vidStyle.overOpacity,
          display: vidStyle.overDisplay
        }}>
    </div>
    <div className={styles.videoContainer}
        style={{
          opacity: vidStyle.opacity,
          display: vidStyle.display
        }}>
        <video
          onEnded={() => videoEnded()}
          onLoadedData={() => startVideo()}
          className={styles.loader}
          src={vid}
          autoPlay
          playsInline
          muted
        />
    </div>
    <div className="App">
      <Routes/>
    </div>
    </>
  );
}




export default App;
