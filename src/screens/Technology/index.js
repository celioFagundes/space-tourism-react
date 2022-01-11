import React, { useState } from 'react'
import styles from './style.module.css'
import tecData from '../../data.json'
const Technology = () => {
  const [tec, setTec] = useState(tecData.technology[0])
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.label}>
          <p>
            <span>03</span>SPACE LAUNCH 101
          </p>
        </div>
        {tec && (
          <div className={styles.containerCrew}>
            <div className={styles.memberInfo}>
              <div>
                  <p>The terminology</p>
                  <p>{tec.name}</p>
                  <p>{tec.description}</p>
              </div>
              <div className={styles.dotsContainer}>
                <div
                  className={`${styles.dot} ${
                    tec.name === 'Launch vehicle' && styles.dotActive
                  }`}
                  onClick={() => setTec(tecData.technology[0])}
                >1</div>
                <div
                  className={`${styles.dot} ${
                    tec.name === 'Spaceport' && styles.dotActive
                  }`}
                  onClick={() => setTec(tecData.technology[1])}
                >2</div>
                <div
                  className={`${styles.dot} ${
                    tec.name === 'Space capsule' && styles.dotActive
                  }`}
                  onClick={() => setTec(tecData.technology[2])}
                >
                    3
                </div>
              </div>
            </div>
            <div className={styles.imgContainer}>
              <img
                className={styles.memberImg}
                src={require(`../../assets/technology/${tec.images.portrait}.jpg`)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Technology
