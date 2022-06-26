<template>
  <div class="home">
    <vuex-quotes-table />
  </div>
</template>

<script>
import VuexQuotesTable from "@/components/vuex/VuexQuotesTable.vue";

export default {
  name: "HomeView",
  components: {
    VuexQuotesTable,
  },
};
</script>
