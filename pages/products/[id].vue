<template>
  <div>
    <p>Product Id {{ id }}</p>
    <p>teste</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
</script>

<style scoped></style>
