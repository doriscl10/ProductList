<script setup lang="ts">
import { useCartStore } from '../../store/cart.store';

const cartStore = useCartStore()
const props = defineProps<{
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

const deleteProduct = () => {
    return cartStore.quantity[props.product.name] = 0;
}
</script>

<template>
    <div class="flex justify-between mx-7 pb-5 border-b">
        <div class="">
            <h4 class="font-redhat font-bold mb-2 text-stone-700">{{product.name}}</h4>
            <div class="flex gap-2">
                <h5 class="font-redhatVar font-medium mr-2 text-[#C73B0F]">{{cartStore.quantity[product.name]}}x</h5>
                <span class="font-redhatVar font-normal text-stone-500">@${{ product.price.toFixed(2) }}</span>
                <span class="font-redhatVar font-medium text-stone-500">${{ cartStore.quantity[product.name]*product.price }}</span>
            </div>
        </div>
        <div class="flex">
            <button class="" @click="deleteProduct">
                <img src="/images/icon-remove-item.svg" alt="" class="border rounded-full border-stone-500 p-[2px] w-5">
            </button>
        </div>
    </div>
</template>