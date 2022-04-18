import { Family } from "@/models/Family"
import { useFetch } from "@/util/fetcher"
import { Params } from "next/dist/server/router"
import Link from "next/link"
import { useState } from "react"
import { Img } from "../Img"
import styles from './index.module.scss'
import Star from './star.svg'

type Props = {
  familias: Array<Family>
}


export const SearchCard = ({ familias } : Props) => {
  const [families, setFamilies] = useState(familias)


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
      <button className={styles.searchBtn}>
        <Img src={Star} alt='Star' style={styles.icon}></Img>
      </button> 
    </>
  )
}

export default async function getStaticProps({ params }: Params){
  const { data } = await useFetch(`/api/guest/`)
  return {
    props: {
      familias: data.familias
    } 
  }
}