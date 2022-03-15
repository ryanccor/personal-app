import Image from 'next/image';
import styles from './index.module.scss'
import Star from '../../public/images/star.svg'
import { SearchBtn } from '../SearchBtn';

export const Card = () => {
  return(
    <div className={styles.card}>
      <div className={styles.title}>
        <h2 >
          Qual seu nome?
        </h2>
      </div>
      <div className={styles.searchBar}>
        <input type="search" name="search" id="search" placeholder='Digite seu nome...' />
      </div>
      <SearchBtn/>
    </div>
  )
}