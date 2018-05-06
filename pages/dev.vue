<template>
  <div>
    <navBar />
    <h1>Hello world!</h1>

    <div class="page-description">
      <p>
        These days most of my coding is web development - working with mostly ruby on rails and javascript at 
        Infotech Research Group.  I love collaborating, and working on a dev team is great for that. We have
        recently chosen Vue.js as a framework since our content is becoming more dynamic.  I'm still getting to
        know it, but the learning curve isn't too steep.  This site is a multipage vue app, served by Netlify, 
        using npm and nuxt.
      </p>
      <p>If I get the dev bug on my own time, I mess around in GameMaker Studio on games that may not be all 
        that fun to play, but they're pretty fun to build.  I create simple vector sprites to represent game 
        objects and states.  I have 2 games on the go at the moment - a simulation game where single celled 
        organisms compete for resources - the difficulty is adjustable by the user.  The other game is a strategy
        skating game.  In both, most of the work is done by the computer, with basic artificial intelligence.
      </p>
      <p>
        While I have worked in the past with Unity3d, flash, XNA, and DirectX, these days I generally stick with GMS2.
        I tend to build prototypes, then lose interest once the interesting mechanics are in place.
        If you're more into level design, graphics, or UX, and would like to collaborate, get in touch with me.
        GMS2 is github friendly, and all my repos are public.  
      </p>
    </div>

    <div id="demo">
      <h2>Game Demo Reel</h2>
      <iframe width="560" height="315" src="http://www.youtube.com/embed/1Za-n3DstI0" frameborder="0" allowfullscreen></iframe>
    </div>

    <div id="games">
      <h2>Games</h2>
      <ul>
        <li><iframe src="//itch.io/embed/218716?dark=true&linkback=true" width="552" height="167" frameborder="0"></iframe></li>
        <li><iframe src="//itch.io/embed/25715?dark=true&linkback=true" width="552" height="167" frameborder="0"></iframe></li>
        <li><iframe src="//itch.io/embed/25111?dark=true&linkback=true" width="552" height="167" frameborder="0"></iframe></li>
      </ul>
    </div>

    <contactBar/>
  </div>
  
</template>

<script>
  // Components
  import navBar from '../components/navBar.vue'
  import contactBar from '../components/contactBar.vue'

  export default {
  name: "Home",
  components: { navBar, contactBar },
  data() {
    return {
    };
  }
};
</script>


<style scoped>

  div {
    text-align: center
  }

  ul li {
    list-style: none;
  }

</style>