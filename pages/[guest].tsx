import { NextPage } from "next"
import { useRouter } from "next/router"

import { Card } from "@/components/Card"
import { useFetch } from '@/util/fetcher'
import { Guest } from "@/models/Guest"
import { Family } from "@/models/Family"
import { useEffect, useState } from "react"

import styles from './guest.module.scss'

const Guest: NextPage = () => {
  const [families, setFamilies] = useState([])
  const router = useRouter()
  const { guest } = router.query
  useEffect(() => {
    const fetcher = async () => {
      const { data } = await useFetch(`/api/guest/?guest=${guest}`)
      setFamilies(data.familias)
    }
    fetcher()
  },[setFamilies])
  console.log(families)

  return(
    <Card>
      { families.map(
          (family: Family) => {
            return (
            <div key={family._id.toString()}>
              <h2>Familia {family.family_name}</h2> 
            {family.guests.map(
              (guest: Guest) => {
                return (
                <div key={guest._id.toString()} className={styles.searchBar}>
                  { guest && <input type="text" defaultValue={ guest.name.toString() }></input> }
                  <select defaultValue={ guest.confirmed ? 'Sim' : 'Não' }>
                    <option>
                      Sim
                    </option>
                    <option>
                      Não
                    </option>
                  </select>
                </div>)
              }
            )} 
            </div>
            )
          }
        )
        }
    </Card>
  )
}

export default Guest