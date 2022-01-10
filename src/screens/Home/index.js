import React from 'react'
import styles from './style.module.css'
const Home = () => {
  return (
    <div className = {styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.container_intro}>
            <p>So, you want to travel to </p>
            <p>Space</p>
            <p>
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space
              and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
              truly out of this world experience!
            </p>
          </div>
          <div className={styles.explore}>
            <div className={styles.exploreGrow}></div>
              <p className={styles.explore_text}>Explore</p>
          </div>
    </div>
    </div>
  )
}

export default Home
