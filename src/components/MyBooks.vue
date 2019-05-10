<template>
  <div>
    <h2>My Selected Books</h2>
    <v-data-table
      no-data-text="You don't have any books selected yet"
      :headers="headers"
      :items="books"
    >
      <template v-slot:items="props">
        <td class="text-xs-center">
          <v-icon @click="$emit('remove-item', props.item)" small>remove_circle</v-icon>
        </td>
        <td class="text-xs-left">{{props.item.title}}</td>
        <td class="text-xs-left">{{ props.item.author_name[0] }}</td>
        <td class="text-xs-left">{{ props.item.first_publish_year}}</td>
        <td class="text-xs-left pa-0">
          <v-btn class="mr-3" primary small @click="routeToViewBook(props.item)">More Info</v-btn>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "MyBooks",
  data() {
    return {
      headers: [
        {
          text: "Remove",
          sortable: false
        },
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
          text: "More info"
        }
      ]
    };
  },
  props: {
    books: {
      type: Array
    }
  },
  methods: {
    routeToViewBook(book) {
      this.$router.push({ name: "BookView", params: book });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>