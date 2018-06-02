<template>
  <div class="page-content">
    <navBar />
    <div>
      <a href="https://www.kickstarter.com/projects/macpeters/hidden-dreams-tarot">
        <img v-bind:src="kickstarterLaunch" alt="Hidden Dreams Kickstarter Now Live" title="Hidden Dreams Kickstarter Now Live" />
      </a>
    </div>

    <div>
      <h1>The Hidden Dreams Tarot</h1>
      <h3>A synthesis of symbolism and lore.</h3>
      <h4>Most tarot decks dig deep into a single lore.  The Hidden Dreams Tarot synthesizes them all.</h4>
    </div>
    

    <div>
      <div><iframe width="560" height="315" src="https://www.youtube.com/embed/fwCA5DEUbd8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>
    </div>
    <div class="nav-header tarot-sub-nav">
      <hr />
      <a href="#news">What's New</a>
      <a href="#inspiration">Inspiration</a>
      <a href="#tarot-history">The History</a>
      <hr />
    </div>

    <div id="news" class="columns">
      <h4>What's New for the Hidden Dreams Tarot</h4>
      <div class="left-column page-description">
        <p>
          The Kickstarter is set to launch on June 1. I have been working on some Kickstarter exclusive
          rewards.  My Cutie Pie Tarot is a child-friendly collection of characters who personify the
          basic essence of each card in an adorable, relatable manner.  I'm thinking to offer a
          Cutie Pie Tarot poster, available only on kickstarter.
        </p>
        <p>The Guidebook has quick references for astrology, planets, and runes, as well as entheogens, crystals, and more.
          and will be printed in full colour, because colours are often integral to the symbolism, and because us humans tend to be very visual.
          Always mixing up the glyphs for Saturn and Capricorn?  It's easier to remember that Saturn is the yellow one.
        </p>
      </div>
      <div class="right-column">
        <img v-bind:src="cutiePieTarot" alt="Cutie Pie Tarot Teaser" title="Cutie Pie Tarot Teaser" />
      </div>
    </div>

     <hr />
     <br />

    <div id="inspiration" class="columns">
      <h4>The Inspiration Behind Hidden Dreams Tarot</h4>
      <div>
        <div class="left-column">
          <img v-bind:src="hiddenDreamsDeck" alt="Hidden Dreams Tarot Deck" title="Hidden Dreams Tarot Deck" />
        </div>
        <div class="right-column page-description">
          <p>The Hidden Dreams Tarot was designed with the intention of having the imagery speak the symbolism and meaning in a more obvious, modern way.
            In the process, I discovered a lot of clear associations with things outside of Tarot.
            Egyptian, Hebrew, Celtic, Nordic, and Greek mythology all began to factor in, along with numerology, astrology, and colours.
            Over the course of a year, I took notes on all of these associations, and clarified their mappings.
          </p>
        </div>
      </div>
    </div>

    <hr />
    <br />

    <div id="tarot-history" class="columns">
      <h4>The History Of Hidden Dreams Tarot</h4>
      <div>
        <div class="left-column">
          <img v-bind:src="starCard" id="star-card" alt="Hidden Dreams Tarot Star Card Before and After" title="Hidden Dreams Tarot Star Card Before and After" />
        </div>
        <div class="right-column page-description">
          <p>I originally drew these cards purely for my own use. When I finished, I wasn't able to find a printer who could
            run off a single deck for anything affordable,so I ended up printing them as photos: gluing card-back photo to each card-front photo, back to back.
            I then laminated them by hand. I've had this deck for a few years now - it's bulky, and the laminate is beginning
            to peel on some cards.
          </p>
          <p>Years later, people having asked for their own copy, I decided to share and allow other people to
            benefit from the journey I took in putting these together. I redrew each card, making improvements along the way, and
            they are now ready for print. I've organized my notes into an illustrated guidebook, including information I came across
            during the course of my research.
          </p>
        </div>
      </div>
    </div>
    <hr />
    <br />

    <signupForm/>

    <contactBar/>
  </div>
  
</template>

<script>
  // Images
  import logoImage from "../assets/logo.png";
  import kickstarterLaunch from "../assets/tarot/hiddenDreamsTarot_kickstarterLaunch.png";
  import cutiePieTarot from "../assets/tarot/macpeters_cutiePieTarot.png"
  import hiddenDreamsDeck from "../assets/tarot/hiddenDreamsTarotDeck.png"
  import starCard from "../assets/tarot/hiddenDreamsTarot_starCards.png"
  // Components
  import navBar from '../components/navBar.vue'
  import signupForm from '../components/signupForm.vue'
  import contactBar from '../components/contactBar.vue'

  export default {
  name: "Home",
  components: { navBar, contactBar, signupForm },
  data() {
    return {
      logoImage: logoImage,
      kickstarterLaunch: kickstarterLaunch,
      cutiePieTarot: cutiePieTarot,
      hiddenDreamsDeck: hiddenDreamsDeck,
      starCard: starCard
    };
  },
  head () {
    return {
      title: "Hidden Dreams Tarot",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'artDescription', name: 'description', content: 'Most tarot decks dig deep into a single lore.  The Hidden Dreams Tarot synthesizes them all.'},
        { hid: 'artAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Hidden Dreams Tarot' },
        { hid: `og:url`, property: 'og:url', content: 'https://macpeters-vue.netlify.com/' },
        { hid: `og:description`, property: 'og:description', content: 'Most tarot decks dig deep into a single lore.  The Hidden Dreams Tarot synthesizes them all.' },
        { hid: `og:type`, property: 'og:type', content: 'website' },
        { hid: `og:image`, property: 'og:image', content: logoImage }
      ],link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  }
};
</script>

<style scoped>
  .page-content {
    text-align: center;
  }
  h1 {
    font-size: 27px;
    font-weight: bolder;
    padding: 10px;
  }
  .tarot-sub-nav {
    height: 40px;
    padding: 10px;
    text-align: center;
  }
  hr {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
  .tarot-sub-nav a {
    border-radius: 25px;
    background-color: #eef;
    padding: 5px;
    text-decoration: none;
    margin: 10px;
  }
  img {
    width: 80%;
    height: auto;
  }

  /* All Info Sections */
  .left-column {
    width: 45%;
    float: left
  }
  .right-column {
    width: 45%;
    float: right;
  }
  .columns {
    height: 500px;
    padding: 0;
    padding-top: 10px;
    display: block;
  }
  .columns div {
    padding: 10px;
  }
  .columns img {
    max-width: 90%;
    max-height: 480px;;
    height: auto;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  @media screen and (max-width: 612px){
    .left-column {
      width: 100%;
      clear: both;
    }

    .right-column {
      width: 100%;
      clear: both;
    }

    .bottom-signup{
      height: 300px;
    }
    .columns image {
      height: 500px;
    }  
    #tarot-history {
      height: 1100px;
    }
  }
</style>
