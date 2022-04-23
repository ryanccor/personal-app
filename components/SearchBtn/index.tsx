import { Img } from "../Img"
import Image from 'next/image';
import Star from './star.svg'
import styles from './index.module.scss'
import React, { MouseEventHandler } from "react";

export const SearchBtn = (onClick: OnClickHandler) => {
  return (
    <div className={styles.searchBtn}>
      <button onClick={(e) => {console.log(e.currentTarget.value)}}>
        <Img src={Star} alt='Star' style={styles.icon}></Img>
      </button>
  </div>
  )
}