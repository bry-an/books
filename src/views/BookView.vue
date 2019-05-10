<template>
  <div class="ma-2">
    <v-btn class="mb-3" @click="routeHome">Go back</v-btn>
    <div class="title">
      More information about
      <em>{{book.title}}</em>
    </div>
    <div class="subheading mt-3">{{book.title}} was written by {{book.author_name[0]}}</div>
    <div class="subheading mt-3">It was originally published in {{book.first_publish_year}}</div>
    <div class="subheading mt-3">Its ISBN is {{book.isbn[0]}}</div>
  </div>
</template>

<script>
export default {
  name: "BookView",
  data() {
    return {
      book: this.$route.params
    };
  },
  methods: {
    routeHome() {
      this.$router.push({ name: "Home" });
    }
  },
  mounted() {
    if (!this.$route.params) {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>