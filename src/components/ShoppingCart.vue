<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useCartStore } from "../store/cart.store";
import TheItem from "./common/TheItem.vue";
import data from "../data.json";
import Drawer from "primevue/drawer";
import Dialog from "primevue/dialog";

const cartStore = useCartStore();

const visibleDrawer = ref(false);
const visibleDialog = ref(false);

const openConfirmation = () => {
  if (window.innerWidth < 768) {
    visibleDrawer.value = true;
  } else {
    visibleDialog.value = true;
  }
};

const recargarPagina = () => {
  visibleDialog.value = false;
  visibleDrawer.value = false;
  location.reload();
};
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
  Object.values(cartStore.quantity).reduce((sum, val) => sum + val, 0),
);

// Filtramos solo los productos que están en el carrito
const cartProducts = computed(() => {
  return products.value.filter((p) => cartStore.quantity[p.name] > 0);
});
const totalToPay = computed(() => {
  return Object.keys(cartStore.quantity).reduce((total, productName) => {
    const product = products.value.find((p) => p.name === productName);
    if (product) {
      total += product.price * cartStore.quantity[productName];
    }
    return total;
  }, 0);
});
</script>
<template>
  <div
    class="bg-white rounded-xl w-full tablet:w-1/2 mx-auto md:w-full xl:col-span-3 h-fit"
  >
    <h1 class="font-redhatVar font-bold text-[#C73B0F] text-3xl p-8">
      Your Cart ({{ totalItems }})
    </h1>
    <div v-if="totalItems >= 1">
      <TheItem
        v-for="product in cartProducts"
        :key="product.name"
        :product="product"
      >
      </TheItem>
      <div class="flex mx-7 my-7 justify-between">
        <h4 class="font-redhatVar font-medium self-center text-stone-500">
          Order Total
        </h4>
        <h1 class="font-redhatVar font-bold text-2xl text-stone-700">
          ${{ totalToPay.toFixed(2) }}
        </h1>
      </div>

      <div
        class="mx-6 flex justify-center gap-1 bg-[rgb(250,246,240)] rounded-md"
      >
        <img src="/images/icon-carbon-neutral.svg" alt="" class="" />
        <span class="font-redhatVar text-stone-700 font-normal py-3"
          >This is a <strong>carbon-neutral</strong> delivery</span
        >
      </div>
      <div class="mx-6 flex justify-center">
        <button
          class="bg-[#c73b0f] hover:bg-[#d57646] text-white font-redhatVar font-medium rounded-full py-4 w-full my-6"
          @click="openConfirmation"
        >
          Confirm Order
        </button>
      </div>
    </div>
    <div v-else>
      <div class="flex items-center justify-center p-8">
        <img src="/images/illustration-empty-cart.svg" alt="" />
      </div>
      <span
        class="flex justify-center pb-10 font-redhatVar font-semibold text-stone-500"
        >Your added items will appear here</span
      >
    </div>
    <div class="!block md:!hidden">
      <Drawer
        v-model:visible="visibleDrawer"
        position="bottom"
        style="height: auto; background-color: white; color: black"
      >
        <img src="/images/icon-order-confirmed.svg" alt="" class="mb-7" />
        <p class="font-redhatVar text-stone-800 font-bold text-5xl p-1">
          Order
        </p>
        <p class="font-redhatVar text-stone-800 font-bold text-5xl p-1 mb-3">
          Confirmed
        </p>
        <span class="font-redhatVar text-lg m-3 font-medium text-stone-400"
          >We hope you enjoy your food!</span
        >
        <div
          class="bg-[rgb(250,246,240)] rounded-lg py-1 mt-8 max-h-[400px] overflow-y-auto"
        >
          <div
            v-for="product in cartProducts"
            :key="product.name"
            class="flex mx-4 border-b py-5"
          >
            <img
              :src="product.image.thumbnail"
              alt=""
              class="mx-1 rounded-lg w-20"
            />
            <div class="ml-2">
              <h4 class="font-redhat font-bold mb-2 text-stone-700">
                {{ product.name }}
              </h4>
              <div class="flex gap-2">
                <h5
                  class="font-redhatVar font-medium text-xl mr-2 text-[#C73B0F]"
                >
                  {{ cartStore.quantity[product.name] }}x
                </h5>
                <span class="font-redhatVar font-normal text-stone-500 text-xl"
                  >@ ${{ product.price.toFixed(2) }}</span
                >
              </div>
            </div>
            <div class="ml-auto self-center">
              <span class="font-redhatVar font-bold text-xl text-stone-500 mr-1"
                >${{
                  (cartStore.quantity[product.name] * product.price).toFixed(2)
                }}</span
              >
            </div>
          </div>
          <div class="flex mx-7 my-7 justify-between">
            <h4
              class="font-redhatVar font-medium self-center text-stone-500 text-lg"
            >
              Order Total
            </h4>
            <h1 class="font-redhatVar font-bold text-3xl text-stone-700">
              ${{ totalToPay.toFixed(2) }}
            </h1>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            class="bg-[#C73B0F] hover:bg-[#d57646] text-white font-redhatVar font-medium rounded-full py-5 w-full my-6"
            @click="recargarPagina"
          >
            Start New Order
          </button>
        </div>
      </Drawer>
    </div>
    <div class="">
      <Dialog
        v-model:visible="visibleDialog"
        modal
        :style="{ width: '40vw', background: 'white', color: 'black' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
      >
        <img src="/images/icon-order-confirmed.svg" alt="" class="mb-7" />
        <p class="font-redhatVar text-stone-800 font-bold text-3xl p-1">
          Order Confirmed
        </p>
        <span class="font-redhatVar text-md m-3 font-medium text-stone-400"
          >We hope you enjoy your food!</span
        >
        <div
          class="bg-[rgb(250,246,240)] rounded-lg py-1 mt-8 max-h-[400px] overflow-y-auto"
        >
          <div
            v-for="product in cartProducts"
            :key="product.name"
            class="flex mx-4 border-b py-5"
          >
            <img
              :src="product.image.thumbnail"
              alt=""
              class="mx-1 rounded-lg w-15"
            />
            <div class="ml-2">
              <h4 class="font-redhat font-bold mb-2 text-stone-700">
                {{ product.name }}
              </h4>
              <div class="flex gap-2">
                <h5
                  class="font-redhatVar font-medium text-xl mr-2 text-[#C73B0F]"
                >
                  {{ cartStore.quantity[product.name] }}x
                </h5>
                <span class="font-redhatVar font-normal text-stone-500 text-lg"
                  >@ ${{ product.price.toFixed(2) }}</span
                >
              </div>
            </div>
            <div class="ml-auto self-center">
              <span class="font-redhatVar font-bold text-xl text-stone-500 mr-1"
                >${{
                  (cartStore.quantity[product.name] * product.price).toFixed(2)
                }}</span
              >
            </div>
          </div>
          <div class="flex mx-7 my-7 justify-between">
            <h4
              class="font-redhatVar font-medium self-center text-stone-500 text-lg"
            >
              Order Total
            </h4>
            <h1 class="font-redhatVar font-bold text-3xl text-stone-700">
              ${{ totalToPay.toFixed(2) }}
            </h1>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            class="bg-[#C73B0F] hover:bg-[#d57646] text-white font-redhatVar font-medium rounded-full py-5 w-full my-6"
            @click="recargarPagina"
          >
            Start New Order
          </button>
        </div>
      </Dialog>
    </div>
  </div>
</template>
