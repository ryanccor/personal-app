import * as mongoDB from "mongodb";

export class Guest {
  constructor(
    public name : String,
    public confirmed : boolean,
    public _id? : mongoDB.ObjectId,
  ) {}
}