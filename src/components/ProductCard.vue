<script setup lang="ts">
defineProps<{
  product: {
    image: {
      thumbnail: string;
      mobile: string;
      tablet: string;
      desktop: string;
    };
    name: string;
    category: string;
    price: number;
  };
}>();
</script>
<template>
 <div class="">
    <div class="">
        <img :src="product.image.mobile" :alt="product.name" class="rounded-lg">
        
    </div>
    <div class="relative">
      <button class="flex bg-white font-redhat font-bold text-sm  border p-3 border-gray-400 gap-1 rounded-full px-5 absolute -top-6 left-1/2 -translate-x-1/2"><img src="/images/icon-add-to-cart.svg" alt="cart"> Add to Cart</button>
    </div>
    <div class="border py-7">
        <span class="font-redhat text-stone-500">{{ product.category }}</span>
        <p class="font-redhatVar font-semibold">{{ product.name }}</p>
        <p class="font-redhatVar font-semibold text-[#C73B0F]">${{ product.price.toFixed(2) }}</p>
    </div>
 </div>
</template>