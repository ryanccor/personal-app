import type { NextApiRequest, NextApiResponse } from "next";
import Client from '../../../lib/mongodb'


type Data = {
  convidados: void
};


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const collection = Client.db("personal-app").collection("convidados");
  const list = collection.find({}).toArray()
  
  return res.status(200).json({
    'convidadoes': list
  })
}