import React, {useState} from 'react'
import logo from '../../assets/shared/logo.svg'
import styles from './style.module.css'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import hamburgerIcon from '../../assets/shared/icon-hamburger.svg'
import closeIcon from '../../assets/shared/icon-close.svg'
const Header = () => {
  const location = useLocation()
  const [ menuClosed, setMenuClosed] = useState(true)
  return (
    <div className={styles.wrapper}>
      <img src={logo} className={styles.logo} />
     
      <div className={styles.line}></div>
      <nav>
        <input type='checkbox' className={styles.check} id = 'check'/>
        <label htmlFor='check' className={styles.checkbtn} onClick={() => setMenuClosed(!menuClosed)}>
          <img src={menuClosed ? hamburgerIcon : closeIcon} />
        </label>
        <div className={styles.blurContainer}></div>
        <ul className={styles.list_links}>
          <Link
            to='/'
            className={`${styles.link} ${location.pathname === '/' && styles.linkActive}`}
          >
            <span className={styles.screenId}>00</span> Home
          </Link>
          <Link
            to='/destination/moon'
            className={`${styles.link} ${
              location.pathname.includes('destination') && styles.linkActive
            }`}
          >
            <span className={styles.screenId}>01</span> Destination
          </Link>
          <Link
            to='/crew'
            className={`${styles.link} ${location.pathname === '/crew' && styles.linkActive}`}
          >
            <span className={styles.screenId}>02</span> Crew
          </Link>
          <Link
            to='/technology'
            className={`${styles.link} ${location.pathname === '/technology' && styles.linkActive}`}
          >
            <span className={styles.screenId}>03</span> Technology
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header
