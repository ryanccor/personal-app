import { Family } from "@/models/Family"
import styles from './index.module.scss'

export const GuestCard = ({ guests, _id, family_name }: Family) => {
  return (
    <div className={styles.wrapper}>
      <h1>{ family_name }</h1>
      <div className={styles.guestList}>
      {
        guests.map((guest) => {
          return (
            <div className={styles.round} key={ guest._id.toString() }>
              <p>{ guest.name }</p>
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