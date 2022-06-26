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
      state.quotes.quotes[payload.id].quote = payload.quote;
      state.quotes.quotes[payload.id].author = payload.author;
      state.quotes.quotes[payload.id].genre = payload.genre;
      state.quotes.quotes[payload.id].updated_in = payload.updated_in;
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
      state.quotes.quotes = state.quotes.quotes.filter(
        (quote) => quote.id !== payload.id
      );
    },
    SEARCH(state, payload) {
      state.quotes.search.quote_search = payload.search_quote;
      state.quotes.search.author_search = payload.search_author;
      state.quotes.quotes = state.quotes.quotes.filter((quote) => {
        if (
          quote.quote
            .toLowerCase()
            .includes(state.quotes.search.quote_search.toLowerCase()) &&
          quote.author
            .toLowerCase()
            .includes(state.quotes.search.author_search.toLowerCase())
        ) {
          return quote;
        } else if (
          state.quotes.search.quote_search === "" &&
          state.quotes.search_author === ""
        ) {
          return quote;
        } else if (
          state.quotes.search.quote_search === "" &&
          quote.author
            .toLowerCase()
            .includes(state.quotes.search.author_search.toLowerCase())
        ) {
          return quote;
        } else if (
          quote.quote
            .toLowerCase()
            .includes(state.quotes.search.quote_search.toLowerCase()) &&
          state.quotes.search_author === ""
        ) {
          return quote;
        }
      });
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
