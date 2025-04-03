<script setup lang="ts">
import ProductList from '../components/ProductList.vue';
import ShoppingCart from '../components/ShoppingCart.vue';

</script>

<template>
    <section class="p-10">
        <h1 class="font-redhat text-2xl font-bold">Texto con Red Hat Text</h1>
        <p class="font-redhatVar text-lg italic">Texto con Red Hat Variable Italic</p>
        <ProductList></ProductList>
        <ShoppingCart></ShoppingCart>
    </section>
</template>