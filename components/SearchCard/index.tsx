import Link from "next/link"
import { useState } from "react"
import { Img } from "../Img"
import styles from './index.module.scss'
import Star from './star.svg'


export const SearchCard = () => {
  const [nome, setNome] = useState('')


  return (
    <>
    <div className={styles.title}>
        <h2 >
          Qual seu nome?
        </h2>
      </div>
      <div className={styles.searchBar}>
        <input type="search" name="search" id="search" placeholder='Digite seu nome...' />
      </div>
      <Link href={`/fulano`}> 
      <div className={styles.searchBtn}>
        <Img src={Star} alt='Star' style={styles.icon}></Img>
      </div>
      </Link> 
    </>
  )
}