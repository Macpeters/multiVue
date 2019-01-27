<template>
  <div>
    <a href="https://society6.com/macpeters" target="_blank">
      <img v-bind:src="adImage" class="tee_add" alt="Society6 shop" title="Fine Art available on t-shirts, stickers, and more at Society6" />
    </a>
  </div>
</template>

<script>
import adImage from "../../assets/society6_ad.png"

export default {
  name: "artNav",
  components: { },
  data() {
    return {
      adImage: adImage
    };
  }
};
</script>

<style scoped>
  .tee_add {
    padding: 10px;
    max-width: 100%;
  }

</style>