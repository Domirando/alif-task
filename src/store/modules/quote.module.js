export default {
  namespaced: true,
  state: {
    quotes: {
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
      let quote = state.quotes.quotes.filter((quote) =>
        quote.id === payload.id ? quote : null
      );
      quote.quote = payload.quote;
      quote.author = payload.author;
      quote.genre = payload.genre;
      quote.updated_in = payload.updated_in;
      console.log(payload.quote);
    },
    ADD_QUOTE(state, payload) {
      state.quotes.quotes.push({
        id: state.quotes.quotes.length,
        quote: payload.quote,
        author: payload.author,
        genre: payload.genre,
        written_in: payload.written_in,
        updated_in: "not yet",
      });
    },
    DELETE_QUOTE(state, payload) {
      state = state.quotes.quotes.filter((quote) =>
        quote.id !== payload.id ? quote : null
      );
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
  },
};
