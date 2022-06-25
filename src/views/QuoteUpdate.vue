<template>
  <div class="container">
    <h3>{{ msg }}</h3>
    <form class="review-form" @submit.prevent="">
      <label for="name">Author:</label>
      <input id="name" v-model="author" />

      <label for="review">Quote:</label>
      <textarea id="review" v-model="quote"></textarea>

      <label for="rating">Genre:</label>
      <input id="genre" v-model="genre" />

      <span v-if="id">
        <router-link to="/">
          <input
            class="button"
            type="submit"
            @click="updateQuote()"
            value="Submit"
          />
        </router-link>
      </span>
      <span v-else>
        <router-link to="/">
          <input
            class="button"
            type="submit"
            @click="addQuote()"
            value="Submit"
          />
        </router-link>
      </span>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      id: null,
      quote: "",
      author: "",
      genre: "",
      updated_in: "",
      written_in: "",
      date: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
    };
  },
  created() {
    let index = this.$route.params.id--;
    this.msg = this.$route.params.msg;
    this.id = index;
    this.quote = this.$route.params.quote;
    this.author = this.$route.params.author;
    this.genre = this.$route.params.genre;
    this.updated_in = this.date;
  },
  methods: {
    updateQuote() {
      this.$store.dispatch("quotesModule/quoteUpdater", {
        id: this.id,
        quote: this.quote,
        author: this.author,
        genre: this.genre,
        updated_in: this.date,
      });
    },
    addQuote() {
      console.log("this is", this.genre);
      this.$store.dispatch("quotesModule/quoteAdd", {
        quote: this.quote,
        author: this.author,
        genre: this.genre,
        written_in: this.date,
      });
    },
  },
};
</script>

<style scoped>
.container {
  @apply flex flex-col items-center pb-16;
}
input {
  @apply w-full h-[40px] mb-[20px];
}

.button {
  @apply m-[30px] bg-cyan-500 rounded-[5px] text-[18px] w-[160px] h-[60px] text-white p-[20px] text-center cursor-pointer;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
}

label {
  @apply text-[20px] mb-[5px];
}

li {
  @apply text-[18px];
}

.review-form {
  @apply flex flex-col w-[425px] p-[20px] m-[40px] bg-white;
  border: 2px solid #d8d8d8;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.57);
}

.review-form .button {
  @apply block mx-auto my-[30px];
}

textarea {
  @apply w-[95%] h-[70px] p-[10px] text-[20px] mb-[20px];
}

ul {
  list-style-type: none;
}

@media only screen and (max-width: 600px) {
  .review-form {
    @apply w-[90%];
  }
}
</style>
