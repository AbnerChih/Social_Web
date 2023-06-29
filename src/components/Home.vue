<template>
    <div>
      <b-card
        v-for="blog in this.blogs"
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

<template>
    <div>
      <b-container>
        <b-col class="m-5 text-center">
          <h2></h2>
        </b-col>
        <b-row align-h="center" class="m-5">
          <b-form-input></b-form-input>
        </b-row>
        <b-row align-h="center" class="m-3">
          <b-card>
          </b-card>
        </b-row>
      </b-container>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        blogs: [],
      };
    },
    created() {
      this.$http
        .get("http://jsonplaceholder.typicode.com/posts")
        .then(function(data) {
          this.blogs = data.body.slice(0, 10);
        });
    },
  };
  </script>