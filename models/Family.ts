import * as mongoDB from "mongodb";
import { Guest } from "./Guest";

export type Family = {
  _id? : mongoDB.ObjectId,
  family_name : string,
  guests : Guest[]
}