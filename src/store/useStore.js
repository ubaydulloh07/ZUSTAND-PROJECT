import { create } from "zustand";

const useStore = create((set) => ({
  products: [],
  cart: [],
  likedProducts: [],

  addToLiked: (id) =>
    set((state) => {
      const isLiked = state.likedProducts.some((p) => p.id === id);
      const updatedProducts = state.products.map((product) =>
        product.id === id ? { ...product, liked: !product.liked } : product
      );

      return {
        products: updatedProducts,
        likedProducts: isLiked
          ? state.likedProducts.filter((p) => p.id !== id)
          : [...state.likedProducts, state.products.find((p) => p.id === id)],
      };
    }),

  addToCart: (id) =>
    set((state) => {
      const isInCart = state.cart.some((p) => p.id === id);
      if (isInCart) return state;

      const product = state.products.find((p) => p.id === id);
      return product ? { cart: [...state.cart, product] } : state;
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((p) => p.id !== id),
    })),

  addProduct: (newProduct) =>
    set((state) => ({
      products: [
        ...state.products,
        { ...newProduct, id: state.products.length + 1, liked: false },
      ],
    })),

  updateProduct: (id, updatedData) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, ...updatedData } : product
      ),
    })),

  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
}));

export default useStore;
