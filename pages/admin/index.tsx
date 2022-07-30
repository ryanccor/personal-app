import { useEffect, useState } from "react"

import { Card } from "@/components/Card"
import { GuestCard } from "@/components/GuestCard"
import { Family } from "@/models/Family"
import { useNewFamily, useStore } from '@/util/state'
import styles from './index.module.scss'


type Props = {
  familyProps: Family[]
}

const Edit = ({ familyProps }: Props) => {
  
  const [target, setTarget] = useState('')
  
  const {familias, init} = useStore()
  const newFamily = useNewFamily((state) => state.familia)
  
  useEffect(
    () => {
      init(familyProps)
    }
  ,[familyProps, init])


  return (
    <Card>
      <GuestCard key={newFamily._id.toString()} add={true} edit={true} {...newFamily}/>
      <div className={styles.searchBar}>
          <input
            type="search" 
            name="search" 
            id="search" 
            placeholder='Pesquisa...' 
            value={target}  
            onChange={(e) => {setTarget(e.currentTarget.value)}}
            />
        </div>

        { familias.filter(
          (familia) => {
            if (familia.guests.some((e) => { return e.name.toLowerCase().includes(target.toLowerCase()) && target != null } )) {
              return true
              } 
            }
          ).map(
            (familia) => <GuestCard key={familia._id.toString()} edit={ true } {...familia} />
          )
        }
    </Card>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`https://alana15.vercel.app/api/guests`)
  const data = await response.json()
  
  return {
    props: {
      familyProps: data.familias,
    } 
  }
}

export default Edit 