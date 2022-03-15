import type { NextPage, GetServerSideProps } from 'next';
import styles from './index.module.scss'
import Logo from '../public/images/logo_alana_15.svg'
import { Img } from '../components/Img';
import { Card } from '../components/Card';



const Home: NextPage = () =>{  

  return (
    <div className={styles.page}>
      <Img src={Logo} alt='Logo' style={styles.image}/>
      <Card/>
    </div>
)}

export default Home
