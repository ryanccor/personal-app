import { MongoClient } from "mongodb";

export default async function run() {
  const uri = "mongodb+srv://admin:Balaclava01*@cluster0.b1clq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  const client = new MongoClient(uri);
  
  try {
    
    await client.connect();
    
    const collection = client.db("personal-app").collection("convidados");
    const list = await collection.find({}).toArray()
    console.log(list)

    
  } finally {
    await client.close()
  }  
}