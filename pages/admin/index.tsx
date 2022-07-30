import { useEffect, useState } from "react"

import { Card } from "@/components/Card"
import { GuestCard } from "@/components/GuestCard"
import { Family } from "@/models/Family"
import { useFetch } from "@/util/fetcher"
import { useNewFamily, useStore } from '@/util/state'

type Props = {
  familyProps: Family[]
}

const Edit = ({ familyProps }: Props) => {
  
  const {familias, init} = useStore()
  const newFamily = useNewFamily((state) => state.familia)
  
  useEffect(
    () => {
      init(familyProps)
    }
  ,[])


  return (
    <Card>
      <GuestCard key={newFamily._id.toString()} add={true} edit={true} {...newFamily}/>
        { familias.map(
            (familia) => <GuestCard key={familia._id.toString()} edit={ true } {...familia} />
          )
        }
    </Card>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3000/api/guests`)
  const data = await response.json()
  
  return {
    props: {
      familyProps: data.familias,
    } 
  }
}

export default Edit 