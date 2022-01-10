import React, { useState, useEffect } from 'react'
import styles from './style.module.css'
import moonImg from '../../assets/destination/image-moon.png'
import { Link, useLocation } from 'react-router-dom'
import dataPlanets from '../../data.json'

const Destination = () => {
  const location = useLocation()
  const [currentPlanet, setCurrentPlanet] = useState(null)

  useEffect(() => {
    const planet = location.pathname.substring(13)
    const planetData = dataPlanets.destinations.filter(
      item => item.name.toLocaleLowerCase() === planet
    )
    setCurrentPlanet({ ...planetData[0] })
  }, [location])
  return (
    <div className={styles.wrapper}>
      {currentPlanet !== null && (
        <div className={styles.container}>
          <div className={styles.label}>
            <p>
              <span>01</span>Pick your destination
            </p>
          </div>
          <div className={styles.containerPlanet}>
            <div className={styles.colum1}>
              <img src={require(`../../assets/destination/${currentPlanet.images.png}.png`)} />
            </div>
            <div className={styles.colum2}>
              <nav className={styles.navPlanets}>
                <ul className={styles.list_links}>
                  <Link
                    to='/destination/moon'
                    className={`${styles.link} ${
                      location.pathname === '/destination/moon' && styles.linkActive
                    }`}
                  >
                    Moon
                  </Link>
                  <Link
                    to='/destination/mars'
                    className={`${styles.link} ${
                      location.pathname === '/destination/mars' && styles.linkActive
                    }`}
                  >
                    Mars
                  </Link>
                  <Link
                    to='/destination/europa'
                    className={`${styles.link} ${
                      location.pathname === '/destination/europa' && styles.linkActive
                    }`}
                  >
                    Europa
                  </Link>
                  <Link
                    to='/destination/titan'
                    className={`${styles.link} ${
                      location.pathname === '/destination/titan' && styles.linkActive
                    }`}
                  >
                    Titan
                  </Link>
                </ul>
              </nav>
              <div className={styles.containerDescription}>
                <h1>{currentPlanet.name}</h1>
                <p className={styles.description}>{currentPlanet.description}</p>
                <div className={styles.descLine}></div>
                <div className={styles.infoContainer}>
                  <div>
                    <p className={styles.infoType}>Avg. Distance</p>
                    <p className={styles.infoValue}>{currentPlanet.distance}</p>
                  </div>
                  <div>
                    <p className={styles.infoType}>Est. Travel Time</p>
                    <p className={styles.infoValue}>{currentPlanet.travel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Destination
