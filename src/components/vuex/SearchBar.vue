<template>
  <input type="text" v-model.trim="inputQuote" placeholder="Quote..." />
  <input v-model.trim="inputAuthor" type="text" placeholder="Author..." />
  <input type="button" class="btn" value="Search" @click="searchQuote()" />
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
.btn {
  @apply bg-red-400;
}
</style>
