<template>
  <div>
    <p>Product Id {{ id }}</p>
    <p>teste</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
