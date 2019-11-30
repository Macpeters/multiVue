<template>
  <div>
    <h1>Macpeters: Indie Game Development</h1>
    <breadcrumbs/>
    
    <article>
      <h2>Hobby Games</h2>
      <p>
        If I get the dev bug on my own time, I mess around in GameMaker Studio 2 on games that may not be all
        that fun to play, but they're pretty fun to build.  I create simple vector sprites using Inkscape to
        represent game objects and states.  I have 2 games on the go at the moment - a simulation game where
        single celled organisms compete for resources - the difficulty is adjustable by the user.  The other
        game is a strategy skating game.  In both, most of the work is done by the computer, with basic
        artificial intelligence.
      </p>
      <h4>Collaborate with Me!</h4>
      <p>
        While I have worked in the past with Unity3d, flash, XNA, and DirectX, these days I generally stick with GMS2.
        I tend to build prototypes, then lose interest once the interesting mechanics are in place.
        If you're more into level design, graphics, or UX, and would like to collaborate, get in touch with me.
        GMS2 is github friendly, and all my repos are public.
      </p>
      <hr />
    </article>

    <article>
      <a href="https://ravemau5.netlify.com" target="_blank">
        <h3>Play Ravemau5 - a work in progress</h3>
        <img v-bind:src="ravemau5" alt="Ravemau5" />
      </a>

    </article>

    <article id="games">
      <h2>Indie Games on Itch.io</h2>
      <h3>Prototype games made with GameMaker.</h3>
      <ul>
        <li><iframe src="//itch.io/embed/218716?dark=true&linkback=true" width="552" height="167" frameborder="0"></iframe></li>
        <li><iframe src="//itch.io/embed/25111?dark=true&linkback=true" width="552" height="167" frameborder="0"></iframe></li>
      </ul>
    </article>

    <article id="demo">
      <h2>Game Demo Reel</h2>
      <h3>Prototype games made while I was in school - mostly using Flash/AS3, XNA, Unity3d</h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/1Za-n3DstI0?enablejsapi=1&origin=https://macpeters-vue.netlify.com/dev/" frameborder="0" allowfullscreen></iframe>
    </article>

    <blogList/>
  </div>

</template>

<script>
  // Images
  import logoImage from "../../assets/logo.png";
  import ravemau5 from "../../assets/ravemau5.png";
  import github from "../../assets/social/github.png";
  // Components
  import breadcrumbs from '../../components/breadcrumbs.vue'
  // Blog
  import blogList from '../../components/blog.vue'

  export default {
  name: "Dev",
  components: { breadcrumbs, blogList },
  data() {
    return {
      githubImage: github,
      ravemau5: ravemau5,
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/gameDev', name: 'Game Development' }
      ],
      blogFilter: 'technology',
    };
  },
  head () {
    return {
      title: "Macpeters - Web and Game Development",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'gameDevDescription', name: 'description', content: 'Indie game developmment on the side'},
        { hid: 'gameDevAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Macpeters - Game Development' },
        { hid: `og:url`, property: 'og:url', content: 'https://macpeters-vue.netlify.com/gameDev/' },
        { hid: `og:description`, property: 'og:description', content: 'Indie game developmment' },
        { hid: `og:type`, property: 'og:type', content: 'website' },
        { hid: `og:image`, property: 'og:image', content: logoImage }
      ]
    }
  }
};
</script>


<style scoped>

  article {
    width: 90%;
    text-align: center;
    padding: 10px;
  }

  p { padding: 5px; }

  ul li {
    list-style: none;
  }

</style>