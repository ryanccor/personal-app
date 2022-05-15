import { useState } from "react"
import { ObjectID } from "bson"

import { Family } from "@/models/Family"
import { Guest } from "@/models/Guest"

import { GuestCard } from "../GuestCard"

const Add = () => {
  const [guests, setGuests] = useState<Guest[]>([new Guest( 'Digite o nome do convidado', false)])
  
  const newFamily: Family =  {
    _id: new ObjectID(),
    family_name: 'Nome da Família',
    guests
  } 
  
  return (
    <div>
      <GuestCard edit={ true } { ...newFamily }></GuestCard>
    </div>
  )
}


export { Add }