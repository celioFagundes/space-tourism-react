import React, { useState } from 'react'
import styles from './style.module.css'

import crewData from '../../data.json'
const Crew = () => {
  const [currentMember, setCurrentMember] = useState(crewData.crew[0])
  console.log(currentMember)
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.label}>
          <p>
            <span>02</span>Meet your Crew
          </p>
        </div>
        {currentMember && (
          <div className={styles.containerCrew}>
            <div className={styles.memberInfo}>
              <div>
                <p>{currentMember.role} </p>
                <p>{currentMember.name}</p>
                <p>{currentMember.bio}</p>
              </div>
              <div className={styles.dotsContainer}>
                <div
                  className={`${styles.dot} ${
                    currentMember.name === 'Douglas Hurley' && styles.dotActive
                  }`}
                  onClick={() => setCurrentMember(crewData.crew[0])}
                ></div>
                <div
                  className={`${styles.dot} ${
                    currentMember.name === 'Mark Shuttleworth' && styles.dotActive
                  }`}
                  onClick={() => setCurrentMember(crewData.crew[1])}
                ></div>
                <div
                  className={`${styles.dot} ${
                    currentMember.name === 'Victor Glover' && styles.dotActive
                  }`}
                  onClick={() => setCurrentMember(crewData.crew[2])}
                ></div>
                <div
                  className={`${styles.dot} ${
                    currentMember.name === 'Anousheh Ansari' && styles.dotActive
                  }`}
                  onClick={() => setCurrentMember(crewData.crew[3])}
                ></div>
              </div>
            </div>
            <div className={styles.imgContainer}>
              <img
                className={styles.memberImg}
                src={require(`../../assets/crew/${currentMember.images.png}.png`)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Crew
