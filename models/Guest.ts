import { ObjectID } from "bson";
import * as mongoDB from "mongodb";

export class Guest {
  constructor(
    public name : string,
    public confirmed : boolean,
    public _id? : mongoDB.ObjectId,
  ) {
    this._id = new ObjectID()

  }
}