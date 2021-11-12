import vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new vuex.Store({
    state: {
      cryptos: [],
    },
    mutations: {
      setCryptos(state, cryptos) {
        state.cryptos = cryptos;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        const url =
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false#";
        return axios
          .get(url)
          .then((res) => {
            const cryptoData = [];
            for (const key in res.data) {
              cryptoData.push({ ...res.data[key] });
            }
            vuexContext.commit("setCryptos", cryptoData);
          })
          .catch((e) => console.log(e));
      },
    },
    getters: {
      cryptos(state) {
        return state.cryptos;
      },
    },
  });
};

export default createStore;
