<template>
  <div>
    <div>
      <h1>All Blog Posts by Macpeters</h1>
      <blogList/>
    </div>
  </div>
</template>

<script>
  // Images
  import email from "../assets/social/email.png";
  // Blogs
  import blogList from '../components/blog.vue'

  export default {
    name: "blog",
    components: { blogList },
    data() {
      return {
        blogFilter: null
      };
    },
};
</script>


<style scoped>
</style>
