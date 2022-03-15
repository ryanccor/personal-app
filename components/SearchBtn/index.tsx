import { Img } from "../Img"
import Image from 'next/image';
import Star from './star.svg'
import styles from './index.module.scss'

export const SearchBtn = () => {
  return (
    <div className={styles.searchBtn}>
      <button>
        <Img src={Star} alt='Star' style={styles.icon}></Img>
      </button>
  </div>
  )
}