<template>
  <div>
    <navBar/>

    <div>
      <h1>All Blog Posts by Macpeters</h1>
      <blogList/>
    </div>

    <contactBar/>
  </div>
</template>

<script>
  // Images
  import email from "../assets/social/email.png";
  // Blogs
  import blogList from '../components/blog.vue'
  // Components
  import navBar from '../components/navBar.vue'
  import contactBar from '../components/contactBar.vue'

  export default {
    name: "blog",
    components: { navBar, contactBar, blogList },
    data() {
      return {
        blogFilter: null
      };
    },
};
</script>


<style scoped>
</style>
