<template>
  <h1>List of Quotes</h1>
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
            class="px-6 py-3 text-left font-extrabold text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Updated in
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left font-extrabold text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Update
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
        class="bg-white divide-y divide-gray-200"
        v-bind:key="quote.id"
        v-for="quote in quotes"
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
            <div class="text-sm text-gray-700">sfasffsa</div>
          </td>
          <td
            class="px-6 py-4 justify-center flex gap-x-[10px] whitespace-nowrap text-right text-sm"
          >
            {{ quote.author }}
          </td>
          <td class="px-6 py-4 text-center whitespace-nowrap">
            <fa icon="edit" />
          </td>
          <td
            class="px-6 py-4 justify-center flex gap-x-[10px] whitespace-nowrap text-right text-sm"
          >
            <fa icon="trash" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "quotes-table",
  props: {
    quotes: [],
  },
};
</script>

<style scoped>
h1 {
  @apply mb-5 text-lg text-red-600;
}

.quote_container {
  @apply text-amber-600 flex justify-between;
}
</style>
