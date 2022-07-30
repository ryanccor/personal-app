import type { NextApiRequest, NextApiResponse } from "next";

import { connectToDatabase } from '@/util/connectToDatabase'
import { Family } from '@/models/Family'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {db, client} = await connectToDatabase()

  if (client) {
    const result = await db.collection('convidados').find({}).toArray() as Family[]
    result
    ? res.status(200).send(JSON.stringify({
      "familias": result
     })
    )
    : res.status(500).send('Failed') 
  }
}