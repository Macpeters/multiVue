<template>
  <ol class="breadcrumb">
    <span v-for="(crumb, index) in breadcrumbs" :key='index'> 
      <li><a v-bind:href="crumb.link" v-bind:title="crumb.name">{{crumb.name}}</a></li> ›
    </span>
  </ol>
</template>

<script>
export default {
  name: "breadcrumbs",
  components: { },
  data() {
    return {
      breadcrumbs: []
    };
  },
  beforeMount(){
    this.breadcrumbs = this.$parent.breadcrumbs;
  },
};
</script>

<style scoped>
  .breadcrumb {
    text-align: center;
    list-style: none;
  }
  .breadcrumb li {
    display: inline;
  }

</style>