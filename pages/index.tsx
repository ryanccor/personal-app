import type { NextPage } from 'next';
import { useState } from 'react';

import { Card } from '../components/Card';
import { SearchCard } from '../components/SearchCard';



const Home: NextPage = () =>{  
  const [guests, setGuests] = useState([])

  return (
      <Card>
        <SearchCard/>
      </Card>
)}

export default Home
