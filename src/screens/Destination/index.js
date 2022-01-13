import React, { useState, useEffect } from 'react'
import styles from './style.module.css'
import { Link, useLocation } from 'react-router-dom'
import dataPlanets from '../../data.json'
import ScreenLabel from '../../components/ScreenLabel'
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
          <ScreenLabel id='01' label='Pick your destination' />

          <div className={styles.containerPlanet}>
            <div className={styles.colum1}>
              <img src={require(`../../assets/destination/${currentPlanet.images.png}.png`)} alt ={currentPlanet.name} />
            </div>
            <div className={styles.colum2}>
              <div className={styles.navPlanets}>
                <ul className={styles.list_links}>
                  <li>
                    <Link
                      to='/destination/moon'
                      className={`${styles.link} ${
                        location.pathname === '/destination/moon' && styles.linkActive
                      }`}
                    >
                      Moon
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/destination/mars'
                      className={`${styles.link} ${
                        location.pathname === '/destination/mars' && styles.linkActive
                      }`}
                    >
                      Mars
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/destination/europa'
                      className={`${styles.link} ${
                        location.pathname === '/destination/europa' && styles.linkActive
                      }`}
                    >
                      Europa
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/destination/titan'
                      className={`${styles.link} ${
                        location.pathname === '/destination/titan' && styles.linkActive
                      }`}
                    >
                      Titan
                    </Link>
                  </li>
                </ul>
              </div>
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
