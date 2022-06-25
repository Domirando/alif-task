<template>
  <div class="home">
    <quotes-table
      quote="Never Ever Loose someone's trust"
      author="Domirando"
      genre="idk"
      time="15-02-2021"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import quotesTable from "@/components/QuotesTable.vue";

export default {
  name: "HomeView",
  components: {
    quotesTable,
  },
};
</script>
