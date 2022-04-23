import { useRef, useState } from 'react';

import { Family } from '@/models/Family';
import { useFetch } from '@/util/fetcher';
import { Card } from '../components/Card';
import styles from './index.module.scss'
import { Guest } from '@/models/Guest';
import { GuestCard } from '@/components/GuestCard';

type Props = {
  familias: Array<Family>
}

const Home = ({ familias }: Props) =>{  
  const [familiies, setFamilies] = useState(familias)
  const [target, setTarget] = useState('')
  const [filtered, setFiltered] = useState()

  return (
      <Card>
        <div className={styles.title}>
          <h2>
            Qual seu nome?
          </h2>
        </div>
        <div className={styles.searchBar}>
          <input
            type="search" 
            name="search" 
            id="search" 
            placeholder='Digite seu nome...' 
            value={target}  
            onChange={(e) => {setTarget(e.currentTarget.value)}}
            />
        </div>
        <div>
        { familiies.filter(
          (familia) => {
            if (familia.guests.some((e) => { return e.name.toLowerCase().includes(target.toLowerCase()) && target != "" } )) {
              return familia
            } 
        }
          ).map(
            (familia) => <GuestCard {...familia}></GuestCard>
          )
        }
        </div>
      </Card>
)}

export async function getServerSideProps() {
  const { data } = await useFetch(`http://localhost:3000/api/guest`)
  
  return {
    props: {
      familias: data.familias,
    } 
  }
}

export default Home
