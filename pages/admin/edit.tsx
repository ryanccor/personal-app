import { Add } from "@/components/Add"
import { Card } from "@/components/Card"
import { GuestCard } from "@/components/GuestCard"
import { Family } from "@/models/Family"
import { useFetch } from "@/util/fetcher"
import { useState } from "react"

type Props = {
  familias: Array<Family>
}

const Edit = ({ familias }: Props) => {
  const [familiies, setFamilies] = useState(familias)

  return (
    <Card>
      <Add/>
        { familiies.map(
            (familia) => <GuestCard key={familia._id.toString()} {...familia} edit={ true }></GuestCard>
          )
        }
    </Card>
  )
}

export async function getServerSideProps() {
  const { data } = await useFetch(`http://localhost:3000/api/guests`)
  
  return {
    props: {
      familias: data.familias,
    } 
  }
}

export default Edit 