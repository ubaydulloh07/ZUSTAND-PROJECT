import { create } from "zustand";

const useAuth = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  products: [],

  // 🔹 Login qilish funksiyasi
  login: async (username, password) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        set({ user: data });
        localStorage.setItem("user", JSON.stringify(data));
        return { success: true };
      } else {
        console.log(data);
        
        return { success: false, message: "Login yoki parol noto‘g‘ri!" };
      }
    } catch (error) {
      return { success: false, message: "Server bilan bog‘lanib bo‘lmadi!" };
    }
  },

  // 🔹 Logout qilish
  logout: () => {
    set({ user: null });
    localStorage.removeItem("user");
  },

  // 🔹 Mahsulotlarni yuklash
  fetchProducts: async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      set({ products: data.products });
    } catch (error) {
      console.error("Mahsulotlarni yuklashda xato yuz berdi!", error);
    }
  },

  // 🔹 Mahsulot qo‘shish
  addProduct: (newProduct) =>
    set((state) => ({
      products: [...state.products, { ...newProduct, id: state.products.length + 1 }],
    })),

  // 🔹 Mahsulotni o‘chirish
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
}));

export default useAuth;





// /////    ddkkdkdkdkdkdkkdkd






