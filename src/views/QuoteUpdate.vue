<template>
  <div class="container">
    <h3>{{ message }}</h3>
    <form class="review-form" @submit.prevent="">
      <label for="name">Author:</label>
      <input
        id="name"
        v-model="author"
        class="border-2 rounded-xl p-2 outline-0"
      />
      <label for="review">Quote:</label>
      <textarea
        class="border-2 rounded-xl p-2 outline-0"
        id="review"
        v-model="quote"
      ></textarea>
      <label for="rating">Genre:</label>
      <input
        class="border-2 rounded-xl p-2 outline-0"
        id="genre"
        v-model="genre"
      />
      <p class="text-red-700 italic" v-if="!filled && btn_clicked">
        please fill all inputs!
      </p>
      <span v-if="id">
        <input
          class="button"
          type="submit"
          @click="updateQuote()"
          value="Submit"
        />
      </span>
      <span v-else>
        <input
          class="button"
          type="submit"
          @click="addQuote()"
          value="Submit"
        />
      </span>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      message: "Adding a quote",
      quote: null,
      filled: true,
      author: null,
      genre: null,
      updated_in: "",
      written_in: "",
      btn_clicked: false,
      date: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
    };
  },
  created() {
    if (this.$route.params.msg) {
      this.message = this.$route.params.msg;
      this.id = this.$route.params.id;
      this.quote = this.$route.params.quote;
      this.author = this.$route.params.author;
      this.genre = this.$route.params.genre;
      this.updated_in = this.date;
    }
  },
  methods: {
    updateQuote() {
      if (this.quote && this.author && this.genre) {
        this.$store.dispatch("quotesModule/quoteUpdater", {
          id: this.id,
          quote: this.quote,
          author: this.author,
          genre: this.genre,
          updated_in: this.date,
        });
        this.$router.push("/");
      } else if (!this.quote || !this.author || !this.genre) {
        this.filled = false;
        this.btn_clicked = true;
      }
    },
    addQuote() {
      if (this.quote && this.author && this.genre) {
        this.$store.dispatch("quotesModule/quoteAdd", {
          msg: "Adding new quote",
          quote: this.quote,
          author: this.author,
          genre: this.genre,
          written_in: this.date,
        });
        this.$router.push("/");
      } else if (!this.quote || !this.author || !this.genre) {
        this.filled = false;
        this.btn_clicked = true;
      }
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
