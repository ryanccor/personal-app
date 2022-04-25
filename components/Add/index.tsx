import { useState } from "react"
import * as mongoDB from "mongodb";

import { Family } from "@/models/Family"
import { Guest } from "@/models/Guest"
import { GuestCard } from "../GuestCard"
import { Img } from "../Img"
import Star from './star.svg'

const Add = ({ clicado }) => {
  const [click, setClick] = useState(clicado ?? false)
  const newFamily: Family =  {
    family_name: '',
    guests: [] as Guest[]
  } 
  return (
    <div>
      { click 
      ?  <button onClick={() => setClick(true) }>
            <Img src={Star}></Img>
          </button>
      : <GuestCard edit={ true } { ...newFamily }></GuestCard> 
      }

    </div>

  )
}


export { Add }