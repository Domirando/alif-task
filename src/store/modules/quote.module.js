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
          quote: "never ever loose someone's trust",
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
      if (quote) {
        quote.quote = payload.quote;
        quote.author = payload.author;
        quote.genre = payload.genre;
        quote.updated_in = payload.updated_in;
      } else {
        state.quotes.quotes.push({
          id: state.quotes.quotes.length,
          quote: payload.quote,
          author: payload.author,
          genre: payload.genre,
          written_in: payload.written_in,
          updated_in: "not yet",
        });
      }
    },
  },
  actions: {
    quoteUpdater({ commit }) {
      return commit("UPDATER_QUOTE");
    },
  },
};
