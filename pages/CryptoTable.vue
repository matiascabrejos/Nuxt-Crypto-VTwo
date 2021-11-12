<template>
  <div>
    <div v-for="crypto in cryptos" :key="crypto.id">
      <h1>{{ crypto.name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cryptos() {
      return this.$store.getters.cryptos;
    },
  },
};
</script>
