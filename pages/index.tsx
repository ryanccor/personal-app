import { useEffect, useState } from 'react';

import { GuestCard } from '@/components/GuestCard';
import { Card } from '@/components/Card';
import { Family } from '@/models/Family';
import { useStore } from '@/util/state';
import { connectToDatabase } from '@/util/connectToDatabase';

import styles from './index.module.scss';

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
  const {db, client} = await connectToDatabase()

  const result = client && await db.collection('convidados').find({}).toArray() as Family[]
  const data = JSON.stringify(result)
  
  return {
    props: {
      familyProps: JSON.parse(data),
    } 
  }
}

export default Home
