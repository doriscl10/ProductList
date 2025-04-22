<script setup lang="ts">
import { computed,onMounted,ref } from 'vue';
import { useCartStore } from '../store/cart.store';
import TheItem from './common/TheItem.vue';
import data from "../data.json";

const cartStore = useCartStore();




// Definir el tipo del producto
interface Product {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}

const products = ref<Product[]>([]);

onMounted(() => {
  products.value = data;
});

//La suma total de los valores de quantity
const totalItems = computed(() =>
  Object.values(cartStore.quantity).reduce((sum, val) => sum + val, 0)
);

// Filtramos solo los productos que están en el carrito
const cartProducts = computed(() => {
  return products.value.filter(p => cartStore.quantity[p.name] > 0)
})
</script>
<template>
<div class="bg-white rounded-xl">
    <h1 class="font-redhatVar font-bold text-[#C73B0F] text-3xl p-8">Your Cart ({{totalItems}})</h1>
    <div v-if="totalItems >= 1">
        <TheItem
        v-for="product in cartProducts"
        :key="product.name"
        :product="product">
        </TheItem>
        <div class="flex mx-7 my-7 justify-between">
            <h4 class="font-redhatVar font-medium self-center text-stone-500">Order Total</h4>
            <h1 class="font-redhatVar font-bold text-2xl text-stone-700">$46.50</h1>
        </div>
        
        <div class="mx-6 flex justify-center gap-1 bg-[rgb(250,246,240)] rounded-md">
            <img src="/images/icon-carbon-neutral.svg" alt="" class="">
            <span class="font-redhatVar text-stone-700 font-normal py-3">This is a <strong>carbon-neutral</strong> delivery</span>
        </div>
        <div class="mx-6 flex justify-center">
            <button class="bg-[#C73B0F] text-white font-redhatVar font-medium rounded-full py-4 w-full my-6">
                Confirm Order
            </button>
        </div>
    </div>
    <div v-else>
        <div class="flex items-center justify-center p-8">
            <img src="/images/illustration-empty-cart.svg" alt="">    
        </div>
        <span class="flex justify-center pb-10 font-redhatVar font-semibold text-stone-500">Your added items will appear here</span>
    </div>

</div>
</template>