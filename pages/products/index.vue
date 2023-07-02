<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: products } = await useFetch("https://fakestoreapi.com/products");

definePageMeta({
  layout: "products",
});
</script>

<style lang="scss" scoped></style>
