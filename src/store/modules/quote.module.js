export default {
  namespaced: true,
  state: {
    quotes: {
      search: {
        quote_search: "",
        author_search: "",
      },
      quotes: [
        {
          id: 1,
          quote: "never ever loose someone's trust",
          author: "Domirando",
          genre: "smth",
          written_in: "12/12/2021",
          updated_in: "not yet",
        },
        {
          id: 2,
          quote: "2 never ever loose someone's trust",
          author: "Domirando",
          genre: "smth",
          written_in: "25/12/2021",
          updated_in: "not yet",
        },
        {
          id: 3,
          quote: "3 never ever loose someone's trust",
          author: "Domirando",
          genre: "smth",
          written_in: "25/12/2021",
          updated_in: "not yet",
        },
      ],
    },
  },
  mutations: {
    UPDATER_QUOTE(state, payload) {
      const quote = state.quotes.quotes[payload.id];
      quote.quote = payload.quote;
      quote.author = payload.author;
      quote.genre = payload.genre;
      quote.updated_in = payload.updated_in;
    },
    ADD_QUOTE(state, payload) {
      let new_id = state.quotes.quotes.length + 1;
      state.quotes.quotes.push({
        id: new_id,
        quote: payload.quote,
        author: payload.author,
        genre: payload.genre,
        written_in: payload.written_in,
        updated_in: "not yet",
      });
      state.quotes.msg = payload.msg;
    },
    DELETE_QUOTE(state, payload) {
      state.quotes.quotes = state.quotes.quotes.filter(
        (quote) => quote.id !== payload.id
      );
    },
    SEARCH(state, payload) {
      state.quotes.search.quote_search = payload.search_quote;
      state.quotes.search.author_search = payload.search_author;
    },
  },
  actions: {
    quoteUpdater({ commit }, payload) {
      return commit("UPDATER_QUOTE", payload);
    },
    quoteAdd({ commit }, payload) {
      return commit("ADD_QUOTE", payload);
    },
    quoteDelete({ commit }, payload) {
      return commit("DELETE_QUOTE", payload);
    },
    search({ commit }, payload) {
      return commit("SEARCH", payload);
    },
  },
};
