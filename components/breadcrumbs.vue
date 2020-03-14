<template>
  <ol class="breadcrumb">
    <span v-for="(crumb, index) in breadcrumbs" :key='index'>
      <li><a v-bind:href="crumb.link" v-bind:title="crumb.name">{{crumb.name}}</a></li> ›
    </span>
  </ol>
</template>

<script>
export default {
  name: 'Breadcrumbs',
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
    padding-bottom: 30px;
  }
  .breadcrumb li {
    display: inline;
  }
  a {
    color:  #897DF4;
  }

  a:visited {
    color: rgb(19, 182, 41);
  }

</style>