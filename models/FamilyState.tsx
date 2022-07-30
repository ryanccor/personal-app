import { Family } from "@/models/Family";
import { ObjectID } from "bson";

export type FamilyState = {
  familia: Family,
  new: () => void
};

export type ListFamilyState = {
  familias: Family[];
  inc: (familia: Family) => void,
  del: (_id: ObjectID) => void,
  init: (familyList: Family[]) => void
};

