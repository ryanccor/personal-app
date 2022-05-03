import { useState } from "react"
import { ObjectID } from "bson"

import { Family } from "@/models/Family"
import { Guest } from "@/models/Guest"

import { GuestCard } from "../GuestCard"
import { Submmit } from "../Submmit"
import styles from './index.module.scss'
import { useForm } from "react-hook-form"
import { cp } from "fs/promises"

const Add = ({ clicado }) => {
  const [data, setData] = useState('')
  const [guests, setGuests] = useState<Guest[]>([new Guest( 'Digite o nome do convidado', false)])
  const { register, handleSubmit } = useForm()
  
  const newFamily: Family =  {
    _id: new ObjectID(),
    family_name: 'Nome da Família',
    guests
  } 
  
  return (
    <form onSubmit={handleSubmit((data) => setData( JSON.stringify(data) )  )}>
      <GuestCard edit={ true } { ...newFamily }></GuestCard>
      <div className={ styles.addButton }>
        <button onClick={ () => setGuests([...guests, new Guest( 'Digite o nome do convidado', false)]) }>
          Adicionar Convidado
        </button>
      </div>
      <Submmit></Submmit>
    </form>
  )
}


export { Add }