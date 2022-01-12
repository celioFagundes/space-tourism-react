import React, { useState } from 'react'
import styles from './style.module.css'
import tecData from '../../data.json'
import useWindowWidth from '../../useWindowWidth'
const Technology = () => {
  const [tec, setTec] = useState(tecData.technology[0])
  const wide = useWindowWidth(810)
  console.log(wide)
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
              <div className={styles.descContainer}>
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
                src={wide ? require(`../../assets/technology/${tec.images.portrait}.jpg`) : require(`../../assets/technology/${tec.images.landscape}.jpg`)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Technology
