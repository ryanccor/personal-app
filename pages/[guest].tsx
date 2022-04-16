import { NextPage } from "next"
import { useRouter } from "next/router"

import { Card } from "@/components/Card"
import { useFetch } from '@/util/fetcher'
import { Guest } from "@/models/Guest"

const Guest: NextPage = () => {
  const router = useRouter()
  const { guest } = router.query
  const { data } = useFetch(`/api/guest/?guest=${guest}`) 


  return(
    <Card>
      { router.isFallback ? <>Loading...</> :  data?.convidados.map((guest: Guest) =><h1>guest</h1> ) }
    </Card>
  )
}

export default Guest