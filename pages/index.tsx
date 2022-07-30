import { useEffect, useState } from 'react';

import { Family } from '@/models/Family';
import { useFetch } from '@/util/fetcher';
import { GuestCard } from '@/components/GuestCard';
import { Card } from '../components/Card';
import { Add } from '@/components/Add';

import styles from './index.module.scss';
import { ObjectID } from 'bson';
import { Guest } from '@/models/Guest';
import { useStore } from '@/util/state';


type Props = {
  familyProps: Family[]
}


const Home = ({ familyProps }: Props) =>{
  const [target, setTarget] = useState('')
  const {familias, init} = useStore()

  useEffect(
    () => {
      init(familyProps)
    }
  ,[familyProps, init])
  
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
  const response = await fetch(`https://alana15.vercel.app/api/guests`)
  const data = await response.json()
  
  return {
    props: {
      familyProps: data.familias,
    } 
  }
}

export default Home
