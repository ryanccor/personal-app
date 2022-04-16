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
    return {client: cachedClient, db: cachedDb}
  }

  const client = await mongoDB.MongoClient.connect(uri);
  const db: mongoDB.Db = client.db(dbName);

  cachedClient = client
  cachedDb = db

  return { client, db }
}