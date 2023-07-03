<template>
  <div>
    <h2>About</h2>
    <p>teste</p>
    <p>teste</p>
    <div>
      {{ data }}
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/GBP");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 20px 0;
}

p {
  margin: 20px 0;
}
</style>
