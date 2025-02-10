import { Product } from "@/types/Product";
import { create } from "zustand";

interface ProductStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));

export default useProductStore;