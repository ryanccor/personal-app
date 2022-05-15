import { Family } from "@/models/Family";
import { connectToDatabase } from "@/util/connectToDatabase";
import { ObjectID } from "bson";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { _id, family_name, guests}  = JSON.parse(req.body) as Family
  const { db } = await connectToDatabase()

  try {
    // const { family_name, guests } = familia
    const result = await db.collection('convidados').replaceOne({"_id": new ObjectID(_id) },{family_name, guests},{upsert: true})

    result 
    ? res.status(201).send( result.upsertedId )
    : res.status(500).send( 'Failed' )
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}