export default defineEventHandler(async (event) => {
  //   const { name } = getQuery(event);
  //   const { age } = await readBody(event);
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/currencies?apikey=2NVNvJuSVcNNV4KTLjnO8W9MEQK8za9FlbTsqn83"
  );

  return data;
});
