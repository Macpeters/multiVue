<template>
  <div>
    <h1>Macpeters: Cartoons and Comics</h1>
    <breadcrumbs/>
    <artNav/>

    <article>
      <h2>Creativity and Drawing Fundamentals</h2>
      <br />
      
      <article>
        <a 
        class="drawings-button" 
        href="https://macpeters-drawings.netlify.com/" 
        target="_blank">
        <span>
          Check out my Drawings  
        </span>
        </a>
      </article>

      <br />
      
      
      <article>
        <div class="blurb">
          <h2>Cartoons</h2>
          <p>
            I've started drawing a lot of cartoons - quick sketches are awesome practice, and I think there's
            a lot of value in exploring the absurdities of the animated world.  Realism is overshadowed by
            expression, which helps push the boundaries of creativity.  Boiling an idea down to its
            simplist expression is deceptively difficult - there are fewer lines, but those lines have to
            be on point.  So cartooning gives me a lighter, more humourous medium within which I can work
            on fundamental drawing skills while breaking down creative barriers.
            <img v-bind:src="ratBastard" alt="That Rat Bastard" />
          </p>
        </div>
      </article>

      <article>
        <div class="blurb">
          <h2>Exercises</h2>
          <p>
            It's important to keep practicing - a painting is only as good as the drawing it started 
            with.  To that end, I have a number of exercises I do to improve my skills. One of them 
            I call Draw 9 - which is exactly what it sounds like.  I take a subject I need to work on,
            and I draw it 9 times, in order to get a better sense of what it looks like, with the 
            differences and similarities in different examples. 
            <img v-bind:src="draw9" alt="Draw 9 Toddlers" />
          </p>
        </div>
      </article>
    </article>

    <blogList/>
    <teePublicAd/>
  </div>
</template>

<script>
// images
import draw9    from "../../assets/cartoons/macpeters_draw9.png";
import ratBastard  from "../../assets/cartoons//macpeters_ratBastard.png";

// components
import breadcrumbs from '../../components/breadcrumbs.vue'
import blogList from '../../components/blog.vue'
import teePublicAd from "../../components/ads/teePublic.vue"

export default {
  name: "Cartoons",
  components: { breadcrumbs, blogList, teePublicAd },
  data() {
    return {
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/art', name: 'Art' },
        { link: '/art/cartoons', name: 'Cartoons' }
      ],
      blogFilter: 'cartoons',
      draw9: draw9,
      ratBastard: ratBastard
    };
  },
  head () {
    return {
      title: "Macpeters Drawings and Cartoons",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'comicDescription', name: 'description', content: 'Whimsical, dry humour cartoons using minimal colours'},
        { hid: 'comicAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Macpeters Drawings and Cartoons' },
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

  article {
    text-align: center;
    margin: 10px;
  }

  .drawings-button {
    width: 60%;
    padding: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: solid #ccc;
    border-radius: 10px;
    border-width: 1px 1px 1px 1px;
    clear: both;
  }

  .drawings-button:hover {
    background-color: aliceblue;
  }

  img {
    width: 90%;
    height: auto;
  }

</style>
