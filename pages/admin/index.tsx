import { useEffect, useState } from "react"

import { Card } from "@/components/Card"
import { GuestCard } from "@/components/GuestCard"
import { Family } from "@/models/Family"
import { useNewFamily, useStore } from '@/util/state'
import { connectToDatabase } from "@/util/connectToDatabase"

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
          ).reverse().map(
            (familia) => <GuestCard key={familia._id.toString()} edit={ true } {...familia} />
          )
        }
    </Card>
  )
}

export async function getServerSideProps() {
  const {db, client} = await connectToDatabase()

  const result = client && await db.collection('convidados').find({}).toArray() as Family[]
  const data = JSON.stringify(result)
  
  return {
    props: {
      familyProps: JSON.parse(data),
    } 
  }
}

export default Edit 