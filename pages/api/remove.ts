import { Family } from "@/models/Family";
import { connectToDatabase } from "@/util/connectToDatabase";
import { ObjectId } from "bson";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { _id }  = req.body
  const { db, client } = await connectToDatabase()

  try {
    const result = await db.collection('convidados').deleteOne({"_id": new ObjectId(_id) })

    result 
    ? res.status(201).send( result.deletedCount )
    : res.status(500).send('Failed')
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }

}