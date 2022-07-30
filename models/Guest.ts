import { ObjectID } from "bson";
import * as mongoDB from "mongodb";

export class Guest {
  constructor(
    public name? : string,
    public confirmed? : boolean,
    public _id? : mongoDB.ObjectId,
  ) {
    this._id = _id ?? new ObjectID()
    this.name = name ?? 'Digite o nome do convidado'
    this.confirmed = confirmed ?? false
  }
}