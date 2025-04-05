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
    <div>
        <img :src="product.image.mobile" :alt="product.name">
    </div>
        <button class="flex bg-white font-redhat"><img src="/images/icon-add-to-cart.svg" alt="cart"> Add to Cart</button>
    <div>
        <span>{{ product.category }}</span>
        <p>{{ product.name }}</p>
        <p>{{ product.price }}</p>
    </div>
 </div>
</template>