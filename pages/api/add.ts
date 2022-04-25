import { Family } from "@/models/Family";
import { connectToDatabase } from "@/util/connectToDatabase";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const familia  = req.body as Family
  const { db, client } = await connectToDatabase()

  try {
    const result = await db.collection('convidados').insertOne(familia)

    result 
    ? res.status(201).send('Success')
    : res.status(500).send('Failed')
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }

}