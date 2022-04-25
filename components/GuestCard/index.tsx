import { Family } from "@/models/Family"
import styles from './index.module.scss'

type GuestCardProps = Family & { edit : boolean}

export const GuestCard = ({ guests, _id, family_name, edit }: GuestCardProps) => {
  return (
    <div className={styles.wrapper} key={ _id?.toString() ?? 1 }>
      <h1>{ family_name }</h1>
      <div className={styles.guestList}>
      {
        guests.map((guest, index) => {
          return (
            <div className={styles.round} key={ guest._id.toString() ?? index }>
              { edit ?  <input className={ styles.name } type="text" defaultValue={`${guest.name}`}></input> : <p className={ styles.name }>{ guest.name }</p> }
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