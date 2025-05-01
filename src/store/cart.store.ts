import { defineStore } from "pinia";
import { reactive } from "vue";

export const useCartStore = defineStore("cart", () => {
  // Cada producto tiene su propia cantidad
  const quantity = reactive<{ [productName: string]: number }>({});

  const addToCart = (name: string) => {
    quantity[name] = 1;
  };
  const increase = (name: string) => {
    quantity[name]++;
  };
  const decrease = (name: string) => {
    quantity[name]--;
  };
  return {
    quantity,
    addToCart,
    increase,
    decrease,
  };
});
