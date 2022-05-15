import React from "react";

import { Img } from "../Img"
import Star from './star.svg'
import styles from './index.module.scss'

export const Submmit = () => {
  return (
    <div className={styles.searchBtn}>
      <button onClick={(e) => {}} type="submit">
        <Img src={Star} alt='Star' style={styles.icon}></Img>
      </button>
  </div>
  )
}