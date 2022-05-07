import * as mongoDB from "mongodb";

let uri = process.env.DB_CONN_STRING || ""
let dbName = process.env.DB_NAME || ""

let cachedClient: any = null
let cachedDb: any = null

if (!uri) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

if (!dbName) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  )
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb){
    return {client: cachedClient as mongoDB.MongoClient, db: cachedDb as mongoDB.Db}
  }

  const client = await mongoDB.MongoClient.connect(uri);
  const db: mongoDB.Db = client.db(dbName);

  cachedClient = client as mongoDB.MongoClient
  cachedDb = db as mongoDB.Db

  return { client, db }
}