<template>
  <div>
    <h2>Your search found {{results.numOfResults}} results</h2>
    <p v-if="results.numOfResults > 100">Here are the most relevant 100 results</p>
    <v-data-table :headers="headers" :items="booksArray">
      <template v-slot:items="props">
        <td>{{props.item.title}}</td>
        <td>{{ props.item.author_name[0] }}</td>
        <td>{{ props.item.first_publish_year}}</td>
        <td>
          <v-btn primary small @click="$emit('add-to-my-books', props.item)">Add to My Books</v-btn>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "SearchResults",
  props: {
    results: {
      type: Object
    }
  },
  data() {
    return {
      headers: [
        {
          text: "Title",
          value: "title"
        },
        {
          text: "Author",
          value: "author_name[0]"
        },
        {
          text: "First published",
          value: "first_publish_year"
        },
        {
          text: "Add Book"
        }
      ]
    };
  },
  computed: {
    booksArray() {
      return this.results.results;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>