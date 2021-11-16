<template>
  <!-- <div class="bg-gray-900">
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
    </div> -->
    <div class="bg-white">
       <div class="container mx-auto px-4 sm:px-8">
      <div class="form-control pb-6">
        <label class="label">
          <span class="label-text pt-2 pb-2 m-auto text-gray-900">Name/Symbol Filter</span>
        </label>
        <input
          type="text"
          placeholder="Name/Symbol"
          class="input input-accent input-bordered text-center bg-white"
          v-model="textSearch"
          @keyup="cryptoFilter()"
        />
      </div>
  <div class="py-2">
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div
        class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
      >
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                class="px-5 py-3 border-b-2 border-white bg-gray-900 text-left font-semibold text-white uppercase tracking-wider"
              >
                Name / Symbol
              </th>
              <th
                class="px-5 py-3 border-b-2 border-white bg-gray-900 text-left font-semibold text-white uppercase tracking-wider"
              >
                PRICE
              </th>
              <th
                class="px-5 py-3 border-b-2 border-white bg-gray-900 text-left font-semibold text-white uppercase tracking-wider"
              >
                PRICE CHANGE 24H
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="crypto in filteredCryptos" :key="crypto.id">
              <td class="px-5 py-5 border-b border-white bg-gray-900 text-sm">
                <div class="flex">
                  <div class="flex-shrink-0 w-10 h-10">
                    <img class="w-10 rounded-full" v-bind:src="crypto.image" />
                  </div>
                  <div class="ml-3">
                    <p class="text-white whitespace-no-wrap font-semibold">
                      {{ crypto.name }}
                    </p>
                    <p class="text-white whitespace-no-wrap font-semibold">{{ crypto.symbol.toUpperCase() }}</p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-white bg-gray-900 text-sm">
                <p class="text-white whitespace-no-wrap font-semibold">${{ crypto.current_price }}</p>
                <p class="text-white whitespace-no-wrap font-semibold">USD</p>
              </td>
              <td class="px-5 py-5 border-b border-white bg-gray-900 text-sm">
                <p class="whitespace-no-wrap font-semibold" v-bind:style="{
                color: crypto.price_change_percentage_24h > 0 ? 'green' : 'red',
              }">{{ crypto.price_change_percentage_24h.toFixed(2) }}%</p>
                <p class="whitespace-no-wrap font-semibold" v-bind:style="{
                color: crypto.price_change_24h > 0 ? 'green' : 'red',
              }">{{ crypto.price_change_24h.toFixed(2) }} ($USD) </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </div>
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
