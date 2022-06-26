<template>
  <h1>List of Quotes</h1>
  <div class="top_bar">
    <SearchBar @searchQuote="searching" />
    <router-link to="/update">Add new quote</router-link>
  </div>
  <div class="quote_container">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th
            scope="col"
            class="px-6 py-4 text-left text-xs text-center w-1/3 bg-cyan-200 font-extrabold font-medium text-gray-500 uppercase tracking-wider"
          >
            Quote
          </th>
          <th
            scope="col"
            class="px-6 text-center py-3 text-left font-extrabold text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Author
          </th>
          <th
            scope="col"
            class="px-6 text-center py-3 text-left font-extrabold text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Genre
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left font-extrabold text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Updated in
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left font-extrabold text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Edit
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left font-extrabold text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Delete
          </th>
        </tr>
      </thead>
      <tbody
        v-for="(quote, index) in item ? item : quotes"
        :key="index"
        class="bg-white divide-y divide-gray-200"
      >
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center justify-center">
              <div>
                <div class="text-sm font-medium text-gray-900"></div>
                <div class="text-sm text-gray-700">{{ quote.quote }}</div>
              </div>
            </div>
          </td>

          <td class="px-6 py-4 text-center whitespace-nowrap">
            <div class="text-sm text-gray-700">{{ quote.author }}</div>
          </td>
          <td class="px-6 py-4 text-center whitespace-nowrap">
            <div class="text-sm text-gray-700">{{ quote.genre }}</div>
          </td>
          <td
            class="px-6 py-4 justify-center flex gap-x-[10px] whitespace-nowrap text-right text-sm"
          >
            {{ quote.updated_in }}
          </td>
          <td class="px-6 py-4 text-center whitespace-nowrap">
            <fa class="icon" icon="edit" @click="shareData(quote, index)" />
          </td>
          <td
            class="px-6 py-4 justify-center flex gap-x-[10px] whitespace-nowrap text-right text-sm"
          >
            <fa
              class="icon"
              @click="
                openModal = true;
                selectedQuote = quote.id;
              "
              icon="trash"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="openModal" class="modal">
    <p>Do you want to continue deleting quote?</p>
    <div class="btns">
      <button @click="deleteQuote(selectedQuote)">Continue</button>
      <button @click="openModal = false">Cancel</button>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/vuex/SearchBar";
import { mapGetters } from "vuex";

export default {
  name: "vuex-quotes-table",
  components: { SearchBar },
  data() {
    return {
      openModal: false,
      selectedQuote: null,
      item: null,
      selectedIndex: null,
    };
  },
  computed: mapGetters({
    quotes: "getQuotesState",
    search: "getSearch",
  }),
  methods: {
    searching() {
      this.item = this.quotes.filter((quote) => {
        if (
          quote.quote
            .toLowerCase()
            .includes(this.search.quote_search.toLowerCase()) &&
          quote.author
            .toLowerCase()
            .includes(this.search.author_search.toLowerCase())
        ) {
          return quote;
        } else if (
          this.search.quote_search === "" &&
          this.search.search_author === ""
        ) {
          return quote;
        } else if (
          this.search.quote_search === "" &&
          quote.author
            .toLowerCase()
            .includes(this.search.author_search.toLowerCase())
        ) {
          return quote;
        } else if (
          quote.quote
            .toLowerCase()
            .includes(this.search.quote_search.toLowerCase()) &&
          this.search.search_author === ""
        ) {
          return quote;
        }
      });
      console.log(this.item);
    },
    shareData(quote, index) {
      this.selectedIndex = index;
      this.$router.push({
        name: "quotes-update",
        params: {
          msg: "Updating",
          id: this.selectedIndex,
          quote: quote.quote,
          author: quote.author,
          genre: quote.genre,
        },
      });
    },
    deleteQuote(index) {
      this.openModal = false;
      this.$store.dispatch("quotesModule/quoteDelete", { id: index });
    },
  },
};
</script>

<style scoped>
.top_bar {
  @apply text-slate-700 flex justify-between italic;
}

h1 {
  @apply mb-12 text-2xl text-red-600;
}

.quote_container {
  @apply text-amber-600 flex justify-between my-3;
}

.icon {
  @apply cursor-pointer;
}
.modal {
  @apply absolute top-[240px] left-[400px] flex flex-col w-[425px] p-[20px] bg-white;
  border: 2px solid #d8d8d8;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.57);
}
.btns {
  @apply flex justify-between mt-10 text-red-700;
}
</style>
