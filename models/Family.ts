import * as mongoDB from "mongodb";
import { Guest } from "./Guest";

export type Family = {
  ObjectId : mongoDB.ObjectId,
  family: String,
  nomes: Array<Guest>
}