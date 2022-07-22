import { useState } from 'react';

import { Family } from '@/models/Family';
import { useFetch } from '@/util/fetcher';
import { GuestCard } from '@/components/GuestCard';
import { Card } from '../components/Card';
import { Add } from '@/components/Add';

import styles from './index.module.scss';


type Props = {
  familias: Family[]
}


const Home = ({ familias }: Props) =>{
  const logged = true  
  const [target, setTarget] = useState('')

  return (
      <Card>
        <div className={styles.title}>
            <h2>Qual seu nome?</h2>
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
        { logged
          ? <Add/>
          : null
        }
        <div>
        { familias.filter(
          (familia) => {
            if (familia.guests.some((e) => { return e.name.toLowerCase().includes(target.toLowerCase()) && target != "" } )) {
              return true
            } 
        }
          ).map(
            (familia) => <GuestCard key={familia._id.toString()} {...familia} edit={ logged }/>
          )
        }
        </div>
      </Card>
)}

export async function getServerSideProps() {
  const { data } = await useFetch(`http://localhost:3000/api/guests`)
  
  return {
    props: {
      familias: data.familias,
    } 
  }
}

export default Home
