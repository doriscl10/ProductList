<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '../store/cart.store';
const cartStore = useCartStore();

//La suma total de los valores de quantity
const totalItems = computed(() =>
  Object.values(cartStore.quantity).reduce((sum, val) => sum + val, 0)
);
</script>
<template>
<div class="bg-white rounded-xl">
    <h1 class="font-redhatVar font-bold text-[#C73B0F] text-3xl p-8">Your Cart ({{totalItems}})</h1>
    <div>
        <div class="flex items-center justify-center p-8">
            <img src="/images/illustration-empty-cart.svg" alt="">    
        </div>
        <span class="flex justify-center pb-10 font-redhatVar font-semibold text-stone-500">Your added items will appear here</span>
    </div>
</div>
</template>