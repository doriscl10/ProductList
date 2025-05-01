<script setup lang="ts">
import { useCartStore } from '../store/cart.store';


const cartStore = useCartStore();

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
 <div class="tablet:w-1/2 tablet:mx-auto md:w-full">
    <div>
      <picture>
        <!-- Imagen para escritorio -->
        <source :srcset="product.image.desktop" media="(min-width: 1024px)">
        <!-- Imagen para tablet -->
        <source :srcset="product.image.tablet" media="(min-width: 640px)">
        <!-- Imagen por defecto: móvil -->
        <img 
          :src="product.image.mobile"
          :alt="product.name"
          :class="[
            'rounded-lg',
            cartStore.quantity[product.name] ? 'border-2 border-[#C73B0F]' : ''
          ]"
        />
      </picture>
    </div>
    <div class="relative">
      <button 
      v-if="!cartStore.quantity[product.name]"
      @click="cartStore.addToCart(product.name)"
      class="flex bg-white font-redhat font-bold text-sm  border p-3 border-gray-400 gap-1 rounded-full px-6 absolute -top-6 left-1/2 -translate-x-1/2 w-40 text-stone-900 hover:text-[#C73B0F] hover:border-[#C73B0F]"><img src="/images/icon-add-to-cart.svg" alt="cart"> Add to Cart</button>
      <div
      v-else
      class="flex items-center justify-center text-white gap-9 bg-[#C73B0F] w-40 rounded-full absolute -top-6 left-1/2 -translate-x-1/2 p-3">
      <button @click="cartStore.decrease(product.name)" class="pi pi-minus text-sm p-1 border rounded-full hover:bg-white hover:text-[#C73B0F]"></button>
      <span>{{ cartStore.quantity[product.name] }}</span>
      <button @click="cartStore.increase(product.name)" class="pi pi-plus text-sm p-1 border rounded-full hover:bg-white hover:text-[#C73B0F]"></button>
      </div>
    </div>
    <div class="py-7">
        <span class="font-redhat text-stone-500">{{ product.category }}</span>
        <p class="font-redhatVar font-semibold text-stone-800">{{ product.name }}</p>
        <p class="font-redhatVar font-semibold text-[#C73B0F]">${{ product.price.toFixed(2) }}</p>
    </div>
 </div>
</template>