<template>
  <div>
    <h1>Macpeters: Cartoons and Comics</h1>
    <breadcrumbs/>

    <div class="page-description">
      <h2>Creativity and Drawing Fundamentals</h2>
      <p>
        I've started drawing a lot of cartoons - quick sketches are awesome practice, and I think there's
        a lot of value in exploring the absurdities of the animated world.  Realism is overshadowed by
        expression, which helps push the boundaries of creativity.  Boiling an idea down to its
        simplist expression is deceptively difficult - there are fewer lines, but those lines have to
        be on point.  So cartooning gives me a lighter, more humourous medium within which I can work
        on fundamental drawing skills while breaking down creative barriers.
      </p>

    </div>

    <cartoonImages/>

    <blogList/>
    <teePublicAd/>
  </div>
</template>

<script>
// images

// components
import cartoonImages from '../../components/art/cartoonImages.vue'
import breadcrumbs from '../../components/breadcrumbs.vue'
import blogList from '../../components/blog.vue'
import teePublicAd from "../../components/ads/teePublic.vue"

export default {
  name: "Cartoons",
  components: { cartoonImages, breadcrumbs, blogList, teePublicAd },
  data() {
    return {
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/art', name: 'Art' },
        { link: '/art/cartoons', name: 'Cartoons' }
      ],
      blogFilter: 'improvingAtArt',
      chosenImage: null
    };
  },
  head () {
    return {
      title: "Macpeters Cartoons and Comics",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'comicDescription', name: 'description', content: 'Whimsical, dry humour cartoons using minimal colours'},
        { hid: 'comicAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Macpeters Cartoons and Comics' },
        { hid: `og:url`, property: 'og:url', content: 'https://macpeters-vue.netlify.com/cartoons/' },
        { hid: `og:description`, property: 'og:description', content: 'Whimsical, dry humour cartoons using minimal colours' },
        { hid: `og:type`, property: 'og:type', content: 'website' },
        { hid: `og:image`, property: 'og:image', content: '' }
      ]
    }
  }
};
</script>

<style scoped>

  div {
    text-align: center
  }

</style>
