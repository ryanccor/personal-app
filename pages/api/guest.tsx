import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from '@/util/connectToDatabase'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {db, client} = await connectToDatabase()

  const { guest } = req.query

  if (client) {
    const convidados = await db.collection('convidados').find({}).toArray()
    return res.status(200).json({
      "convidados": convidados
    })
  }
}