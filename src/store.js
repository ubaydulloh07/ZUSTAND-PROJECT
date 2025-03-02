import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],
  likedProducts: [],
  cart: [],

  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product],
    })),

  addToLiked: (product) =>
    set((state) => ({
      likedProducts: [...state.likedProducts, product],
    })),

  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),
}));

export default useProductStore;
