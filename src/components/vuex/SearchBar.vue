<template>
  <div class="search_bar">
    <input type="text" v-model.trim="inputQuote" placeholder="Quote..." />
    <input v-model.trim="inputAuthor" type="text" placeholder="Author..." />
    <input type="button" class="btn" value="Search" @click="searchQuote()" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      inputQuote: "",
      inputAuthor: "",
    };
  },
  methods: {
    searchQuote() {
      this.$store.dispatch("quotesModule/search", {
        search_quote: this.inputQuote,
        search_author: this.inputAuthor,
      });
      this.inputAuthor = "";
      this.inputQuote = "";
      this.$emit("searchQuote");
    },
  },
};
</script>

<style scoped>
.search_bar {
  @apply gap-2 flex justify-between;
}
.btn {
  @apply bg-cyan-400 text-white;
}
input {
  @apply border-2 border-cyan-500 rounded-2xl p-2 px-5 outline-0;
}
@media only screen and (max-width: 940px) {
  .search_bar {
    @apply flex-col;
  }
}
</style>
