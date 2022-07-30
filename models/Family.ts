import { ObjectID } from "bson";
import * as mongoDB from "mongodb";
import { Guest } from "./Guest";

export class Family {
  constructor(
    public family_name? : string,
    public guests? : Guest[],
    public _id? : mongoDB.ObjectId,
  ){
    this._id = _id ?? new ObjectID()
    this.family_name = family_name ?? 'Nome da Familia'
    this.guests = guests ?? [new Guest()]

  }
}