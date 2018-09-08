<template>
  <div>
    <span><a id="fine-art" href="/art" title="Fine Art">Fine Art</a></span>
    <span><a id="skateboard-art" href="/skateboards" title="Painted Skateboards">Painted Skateboards</a></span>
    <span><a id="mural-art" href="/murals" title="Murals">Murals/Aerosol</a></span>
  </div>
</template>

<script>
export default {
  name: "artNav",
  components: { },
  data() {
    return {
      active: null
    };
  },
  methods: {
  },
  beforeMount(){
    this.active = this.$parent.name
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

</style>