<template>
  <div class="home">
    <vuex-quotes-table :quotes="quotesState" />
  </div>
</template>

<script>
// @ is an alias to /src
import VuexQuotesTable from "@/components/vuex/VuexQuotesTable.vue";
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: {
    VuexQuotesTable,
  },
  computed: mapGetters({
    quotesState: "getQuotesState",
  }),
};
</script>
