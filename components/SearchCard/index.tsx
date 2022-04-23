import { Family } from "@/models/Family"
import { useFetch } from "@/util/fetcher"
import { Params } from "next/dist/server/router"
import Link from "next/link"
import { useState } from "react"
import { Img } from "../Img"
import styles from './index.module.scss'
import Star from './star.svg'


export const SearchCard = () => {

  return (
    <>
    <div className={styles.title}>
        <h2 >
          Qual seu nome?
        </h2>
      </div>
      
    </>
  )
}