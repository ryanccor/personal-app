import { useState } from 'react';

import { Family } from '@/models/Family';
import { useFetch } from '@/util/fetcher';
import { GuestCard } from '@/components/GuestCard';
import { Card } from '../components/Card';
import { Add } from '@/components/Add';

import styles from './index.module.scss';
import { ObjectID } from 'bson';
import { Guest } from '@/models/Guest';


type Props = {
  familias: Family[]
}


const Home = ({ familias }: Props) =>{
  const [target, setTarget] = useState('')

  const createNewFamily = () => {
    return {
      _id: new ObjectID(),
      family_name: 'Nome da Família',
      guests: [new Guest( 'Digite o nome do convidado', false)]
    }
  }
  
  const [newFamily, setNewFamily] = useState(() => createNewFamily)
  
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
        <div>
        { familias.filter(
          (familia) => {
            if (familia.guests.some((e) => { return e.name.toLowerCase().includes(target.toLowerCase()) && target != "" } )) {
              return true
            } 
        }
          ).map(
            (familia) => <GuestCard key={familia._id.toString()} {...familia}/>
          )
        }
        </div>
      </Card>
)}

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3000/api/guests`)
  const data = await response.json()
  
  return {
    props: {
      familias: data.familias,
    } 
  }
}

export default Home
