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
      <img src={logo} className={styles.logo} alt ='logo'/>
     
      <div className={styles.line}></div>
      <nav>
        <input type='checkbox' className={styles.check} id = 'check'/>
        <label htmlFor='check' className={styles.checkbtn} onClick={() => setMenuClosed(!menuClosed)}>
          <img src={menuClosed ? hamburgerIcon : closeIcon} alt='menu-icon'/>
        </label>
        <div className={`${styles.blurContainer} ${!menuClosed && styles.blurOpen}`}></div>
        <ul className={`${styles.list_links} ${!menuClosed && styles.menuOpen}`}>
          <Link
            to='/'
            onClick={() => setMenuClosed(true) }
            className={`${styles.link} ${location.pathname === '/' && styles.linkActive}`}
          >
            <span className={styles.screenId}>00</span> Home
          </Link>
          <Link
            to='/destination/moon'
            onClick={() => setMenuClosed(true) }
            className={`${styles.link} ${
              location.pathname.includes('destination') && styles.linkActive
            }`}
          >
            <span className={styles.screenId}>01</span> Destination
          </Link>
          <Link
            to='/crew'
            onClick={() => setMenuClosed(true) }
            className={`${styles.link} ${location.pathname === '/crew' && styles.linkActive}`}
          >
            <span className={styles.screenId}>02</span> Crew
          </Link>
          <Link
            to='/technology'
            onClick={() => setMenuClosed(true) }
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
