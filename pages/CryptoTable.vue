<template>
  <div class="overflow-x-auto container mx-auto px-4">
    <div class="form-control pb-6">
      <label class="label">
        <span class="label-text pt-2 pb-2 m-auto">Name/Symbol Filter</span>
      </label>
      <input
        type="text"
        placeholder="Name/Symbol"
        class="input input-accent input-bordered text-center"
        v-model="textSearch"
        @keyup="cryptoFilter()"
      />
    </div>
    <table class="table w-full table-compact table-zebra mb-6">
      <thead>
        <tr>
          <th>#</th>
          <th>NAME</th>
          <th>PRICE</th>
          <th>CHANGE 24H</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="crypto in filteredCryptos" :key="crypto.id">
          <th><img class="w-10 rounded-full" v-bind:src="crypto.image" /></th>
          <td>{{ crypto.name }} ( {{ crypto.symbol.toUpperCase() }} )</td>
          <td>{{ crypto.current_price }} US$</td>
          <td
            v-bind:style="{
              color: crypto.price_change_percentage_24h > 0 ? 'green' : 'red',
            }"
          >
            {{ crypto.price_change_percentage_24h.toFixed(2) }}%
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textSearch: "",
      filteredCryptos: [],
    };
  },
  computed: {
    cryptos() {
      return this.$store.getters.cryptos;
    },
  },
  methods: {
    cryptoFilter() {
      this.filteredCryptos = this.cryptos.filter(
        (crypto) =>
          crypto.name.toLowerCase().includes(this.textSearch.toLowerCase()) ||
          crypto.symbol.toLowerCase().includes(this.textSearch.toLowerCase())
      );
    },
  },
  mounted() {
    this.cryptoFilter();
  },
};
</script>
