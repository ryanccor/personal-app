import { Family } from "@/models/Family"
import { GuestCard } from "../GuestCard"

const Add = (newFamily: Family) => {
   
  return (
    <div>
      <GuestCard edit={ true } { ...newFamily }></GuestCard>
    </div>
  )
}

export { Add }