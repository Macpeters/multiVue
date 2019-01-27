<template>
  <div>
    <a href="https://www.teepublic.com/user/macpeters" target="_blank">
      <img v-bind:src="adImage" class="tee_add" alt="Tee Public shop" title="Cat-toons available on tshirts, stickers, and more at Tee Public" />
    </a>
  </div>
</template>

<script>
import adImage from "../../assets/teePublic_ad.png"

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
  }

</style>