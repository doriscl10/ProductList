<script setup lang="ts">
import {onMounted, ref} from "vue";
import ProductCard from './ProductCard.vue';
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
    <h1 class="font-redhatVar font-bold text-4xl py-2">Desserts</h1>
    <ProductCard
    v-for="product in products"
    :key="product.name"
    :product="product">
    </ProductCard>
</template>