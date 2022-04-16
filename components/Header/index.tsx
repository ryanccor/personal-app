import { Img } from "../Img"
import Logo from './logo_alana_15.svg'
import styles from './index.module.scss'

export const Header = () => {
  return (
    <Img src={Logo} alt='Logo' style={styles.image}/>
  )
}