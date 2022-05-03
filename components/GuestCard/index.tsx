import { Family } from "@/models/Family"
import { ObjectID } from "bson"
import styles from './index.module.scss'

type GuestCardProps = Family & { edit : boolean}

export const GuestCard = ({ guests, _id, family_name, edit }: GuestCardProps) => {
  return (
    <div className={styles.wrapper} key={ _id?.toString() }>
      { edit ? <input type="text" className={ styles.familyName } placeholder={ family_name }></input> : <h1>{ family_name }</h1> }
      <div className={styles.guestList} key={ _id?.toString() }>
      {
        guests.map((guest, index) => {
          const _id = new ObjectID(index) 
          return (
            <div className={styles.round} key={ guest._id.toString() ?? _id.toString() }>
              { edit ?  <input className={ styles.name } type="text" placeholder={guest.name}></input> : <p className={ styles.name }>{ guest.name }</p> }
              <select name="confirmed" id="confirm" defaultValue={ guest.confirmed ? "Sim" : "Não" }>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
            </div>
          )
        })
      }</div>
    </div>
  )
}