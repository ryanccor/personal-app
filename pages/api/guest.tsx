import type { NextApiRequest, NextApiResponse } from "next";

import { connectToDatabase } from '@/util/connectToDatabase'
import { Family } from '@/models/Family'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {db, client} = await connectToDatabase()

  if (client) {
    const familias = await db.collection('convidados').find({}).toArray() as Array<Family>
    return res.status(200).json({
      "familias": familias
    })
  }
}