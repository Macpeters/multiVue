<template>
  <div class="nav-tabs">
    <span v-for="(navLink, index) in navLinks" :key='index'> 
      <span><a v-bind:href="navLink.url" v-bind:id="navLink.id" v-bind:title="navLink.title">{{navLink.title}}</a></span>
    </span>
  </div>
</template>

<script>
export default {
  name: "artNav",
  components: { },
  data() {
    return {
      active: null,
      navLinks: []
    };
  },
  methods: {
  },
  beforeMount(){
    this.active = this.$parent.name
    this.navLinks = this.$parent.navLinks
  },
};
</script>

<style scoped>
  a {
    background-color: #eee;
    padding: 10px;
    margin: 10px; 
    border: 2px solid #bbb;
    border-radius: 5px;
    text-decoration: none;
  }

  .nav-tabs {
    display: block;
    padding: 20px;
    clear: both;
  }

</style>