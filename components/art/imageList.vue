<template>
  <div class="art-gallery">
    <div class="image-selector">
      <span class="scroll-chevron scroll-left"><p>&#60;</p></span>

      <div class="image-selector-scroll">
        <span v-for="image in images" :key='image.id'>
          <img v-bind:src="image.thumb" v-bind:alt="image.title" v-bind:title="image.title" class="thumbnail" @click='choose(image)' />
        </span>
      </div >

      <span class="scroll-chevron scroll-right"><p>&#62;</p></span>
    </div>


    <div class="featured-image">
      <div class="left-column">
        <img v-bind:src="chosenImage.image" v-bind:alt="chosenImage.title" v-bind:title="chosenImage.title" />
      </div>
      <div class="right-column">
        <h3>{{ chosenImage.title }}</h3>
        <h4>{{ chosenImage.description }}</h4>
        <div class="keywords">Keywords: <span>{{ chosenImage.keywords }}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ImageList',
    components: { },
    data() {
      return {
        images: null,
        chosenImage: {
          image: null,
          title: "",
          description: "",
          keywords: null
        }
      };
    },
    beforeMount(){
      this.images = this.$parent.images
      this.choose(this.images[0])
    },
    methods: {
      choose(img) {
        this.chosenImage = img;
      }
    },
    build: {
      assetsPublicPath: "/",
      assetsSubDirectory: "assets"
    }
  };
</script>


<style scoped>
  body {
    font-family: Arial, Helvetica, sans-serif;
  }

  .art-gallery {
    padding: 20px;
    clear: both;
  }

  .image-selector {
    display: flex;
    position: relative;
    width: 100%;
  }

  .image-selector-scroll {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
  .image-selector-scroll::-webkit-scrollbar {
    display: none;
  }
  .scroll-chevron {
    color: #eee;
    position: absolute;
    z-index: 10;
  }
  .scroll-chevron p{
    font-size: 4em;
    opacity: 0.5;
  }
  .scroll-left {
    left: 0;
  }

  .scroll-right {
    right: 0;
  }

  /* Featured Image */
  h4 {
    font-size: 16px;
  }
  .left-column {
    width: 50%;
    float: left
  }
  .right-column {
    width: 50%;
    float: right;
  }
  .featured-image {
    height: 500px;
  }
  .featured-image img {
    max-height: 90vh;
    max-width: 90vw;
  }
  .image-title {
    clear: both;
  }
  .keywords {
    padding-top: 10px;
    color: #bbb;
    font-size: 12px;
  }

  .thumbnail {
    width: 80px;
    height: 80px;
    margin: 5px;
    border-width: 1px;
    border-color: #aaa;
    border-style: solid;
    object-fit: cover;
    overflow: hidden;
  }
  .thumbnail:hover {
    border-color: #eee;
    opacity: 0.7;
  }

  @media screen and (max-width: 1200px){
    .left-column {
      width: 100%;
    }

    .right-column {
      width: 100%;
    }

    .art-gallery {
      margin-bottom: 10px;
      padding-bottom: 20px;
    }

    .keywords {
      height: 50px;
      overflow: hidden;
    }

    .featured-image img {
      max-height: 90vh;
    }
  }

  @media screen and (max-width: 615px){
    .keywords {
      opacity: 0;
      height: 50px;
      overflow: hidden;
    }
  }
</style>
