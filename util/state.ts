import { Family } from "@/models/Family";
import { ListFamilyState, FamilyState } from "@/models/FamilyState";
import create from "zustand";

const useStore = create<ListFamilyState>()((set) => ({
  familias : [] ,
  inc: (familia) => (set((state) => ({ familias: [...state.familias, familia] }))),
  del: (_id) => (set((state) => ({ familias: [...state.familias.filter(x => x._id != _id)] }))),
  init: (familyList) => (set(() => ({ familias: familyList })))
}))

const useNewFamily = create<FamilyState>()((set) => ({
  familia: new Family,
  new: () => set(() => ({familia: new Family}))
})

)

export { useStore, useNewFamily }