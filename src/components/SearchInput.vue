<template>
  <div>
    <h4>Search by author, title, or subject</h4>
    <v-form>
      <v-text-field label="Search" placeholder="e.g. Hemmingway" v-model="userSearch"></v-text-field>
    </v-form>
    <v-btn @click="submitSearch" id="search-submit-btn" color="primary">Search</v-btn>
    <!-- <button @click="submitSearch">Submit</button> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SearchInput",
  data() {
    return {
      userSearch: "",
      searchResults: [],
      numOfResults: null
    };
  },
  methods: {
    async submitSearch() {
      console.log("submit search!");
      const queryUrl = `http://openlibrary.org/search.json?q=${
        this.userSearch
      }`;
      const result = {
        results: [],
        numOfResults: 0
      };

      await axios.get(queryUrl).then(response => {
        result.results = [...response.data.docs];
        result.numOfResults = response.data.numFound;
      });
      this.$emit("set-results", result);
    }
  }
};
</script>

<style lang="sass" scoped>
input[type="text"]
    display: block
    width: 200px
    margin: 8px 0
    border: 0.5px solid
</style>