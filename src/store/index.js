import { createStore } from "vuex";
import quotesModule from "@/store/modules/quote.module";

export default createStore({
  state: {
    quotesState: quotesModule.state,
  },
  mutations: {},
  actions: {},
  modules: {
    quotesModule,
  },
  getters: {
    getQuotesState(state) {
      return state.quotesState.quotes.quotes;
    },
  },
});
