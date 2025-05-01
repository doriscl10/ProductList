<script setup lang="ts">
import ProductList from "../components/ProductList.vue";
import ShoppingCart from "../components/ShoppingCart.vue";
</script>

<template>
  <section class="p-6 xl:p-16 xl:px-24 grid xl:grid-cols-9 gap-8">
    <ProductList></ProductList>
    <ShoppingCart></ShoppingCart>
  </section>
</template>
