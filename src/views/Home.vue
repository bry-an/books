<template>
  <v-container>
    <v-layout row>
      <v-flex fill-width>
        <div class="title mb-4">Welcome to Booj Books!</div>
        <SearchInput @set-results="setResults"/>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex md6>
        <div
          class="body-2"
        >When you add a book to My Selected Books, you can view more information about the book from that list.</div>
        <SearchResults v-if="results" @add-to-my-books="addToMyBooks" :results="results"/>
      </v-flex>
      <v-flex md6 class="ml-5">
        <MyBooks :books="myBooks" @remove-item="removeFromMyBooks"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SearchInput from "../components/SearchInput";
import SearchResults from "../components/SearchResults";
import MyBooks from "../components/MyBooks";

export default {
  name: "Home",
  components: {
    SearchInput,
    MyBooks,
    SearchResults
  },
  data() {
    return {
      results: null,
      myBooks: []
    };
  },
  methods: {
    setResults(results) {
      this.results = results;
    },
    addToMyBooks(book) {
      this.myBooks.push(book);
    },
    removeFromMyBooks(book) {
      console.log("remove book book", book);
      this.myBooks = this.myBooks.filter(myBook => myBook.key !== book.key);
    }
  }
};
</script>
