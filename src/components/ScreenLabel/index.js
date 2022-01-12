import React from 'react'
import styles from './style.module.css'
const ScreenLabel = ({id,label}) => {
    return (
        <div className={styles.label}>
          <p>
            <span>{id}</span>{label}
          </p>
        </div>
    )
}

export default ScreenLabel
