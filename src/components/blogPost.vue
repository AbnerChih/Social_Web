<template>
    <div>
      <input type="text" v-model="search" placeholder="search blogs" />
      <b-card
        v-for="blog in filteredBlogs"
        :key="blog.id"
        :title="blog.title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          {{ blog.body }}
        </b-card-text>
  
        <b-button href="#" variant="primary">See More</b-button>
      </b-card>
    </div>
  </template>
  
  <script>
    import searchMixin from '../mixins/searchMixin';
    export default {
        data() {
        return {
            blogs: [],
            search: '',
        };
        },
        created() {
        this.$http
            .get("http://jsonplaceholder.typicode.com/posts")
            .then(function(data) {
            this.blogs = data.body.slice(0, 10);
            });
        },
    mixins: [searchMixin]
  };
  </script>
  
  <style scoped></style>