import React from 'react'
import styles from './style.module.css'
import crewImg from '../../assets/crew/image-mark-shuttleworth.png'
const Crew = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.label}>
          <p>
            <span>01</span>Pick your destination
          </p>
          <div className={styles.containerCrew}>
            <div className={ styles.memberInfo}>
              <p>Mission Specialist </p>
              <p>MARK SHUTTLEWORTH</p>
              <p>
                Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind
                the Linux-based Ubuntu operating system. Shuttleworth became the first South African
                to travel to space as a space tourist.
              </p>
              <div className={ styles.dotsContainer}>
                <div className={ styles.dot}></div>
                <div className={ styles.dot}></div>
                <div className={ styles.dot}></div>
                <div className={ styles.dot}></div>
              </div>
            </div>
            <div>
              <img className= { styles.memberImg} src={crewImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crew
