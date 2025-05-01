<script setup lang="ts">
import { onMounted, ref } from "vue";
import ProductCard from "./ProductCard.vue";
import data from "../data.json";

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
</script>

<template>
  <div class="xl:col-span-6">
    <h1
      class="font-redhatVar font-bold text-4xl py-2 pb-8 tablet:w-1/2 mx-auto md:w-full text-stone-800"
    >
      Desserts
    </h1>
    <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      <ProductCard
        v-for="product in products"
        :key="product.name"
        :product="product"
      >
      </ProductCard>
    </div>
  </div>
</template>
