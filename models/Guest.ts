import * as mongoDB from "mongodb";

export type Guest = {
  "name": String,
  "confirmed": boolean,
  "_id": mongoDB.ObjectId
}