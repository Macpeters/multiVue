<template>
  <div class="container">
    <div>
      <h1>Macpeters Tarot Decks</h1>
      <breadcrumbs/>

      <h2>The Hidden Dreams Tarot</h2>
      <h4>Most tarot decks dig deep into a single lore.  The Hidden Dreams Tarot synthesizes them all.</h4>
    </div>


    <div id="hidden-dreams">
      <div><iframe width="560" height="315" src="https://www.youtube.com/embed/fwCA5DEUbd8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>
    </div>

    <h4>The Inspiration Behind Hidden Dreams Tarot</h4>
    <div id="inspiration" class="flex-columns">
      <div>
        <div class="column">
          <img v-bind:src="hiddenDreamsDeck" alt="Hidden Dreams Tarot Deck" title="Hidden Dreams Tarot Deck" />
        </div>
        <div class="column">
          <p>
            The Hidden Dreams Tarot was designed with the intention of having the imagery speak the symbolism and meaning in a more obvious, modern way.
          </p>
          <p>
            In the process, I discovered a lot of clear associations with things outside of Tarot.
            Egyptian, Hebrew, Celtic, Nordic, and Greek mythology all began to factor in, along with numerology, astrology, and colours.
          </p>
          <p>
            Over the course of a year, I took notes on all of these associations, and clarified their mappings.
          </p>
        </div>
      </div>
    </div>


    <!-- Hidden Dreams Deck -->
    <div class="flex-columns">
      <div class="column" id="tarot-deck-purchase">
        <div>
          <p>
            Discover the modern sybolic representations of many different cultures, all of which tell the story of the Tarot -
            the Fool's Journey, or the Hero's Journey.
          </p>
          <p>
            Wherever you are in your own journey, the Hidden Dreams Tarot can offer insight into your circumstances, and
            advice on how to proceed.
          </p>
        </div>
        <div>
          <br />
          <a href="http://www.makeplayingcards.com/sell/macpeters" target="_blank" title="Buy Hidden Dreams Tarot Deck Button">Buy The Hidden Dreams Tarot Deck Now</a>
        </div>
      </div>
      <div class="column">
        <a href="http://www.makeplayingcards.com/sell/macpeters" target="_blank" title="Buy Hidden Dreams Tarot Deck Image">
          <img v-bind:src="hiddenDreamsCardSpread" alt="Hidden Dreams Tarot Deck Card Spread" title="Hidden Dreams Tarot Deck Card Spread"/>
        </a>
      </div>
    </div>

    <!-- Hidden Dreams Guidebook -->
    <div class="flex-columns">
      <div class="column">
        <a href="http://www.blurb.com/books/8697712-hidden-dreams-tarot" target="_blank" title="Hidden Dreams Tarot Guidebook Preview">
          <img v-bind:src="hiddenDreamsGuidebook" alt="Hidden Dreams Tarot Guidebook" title="Hidden Dreams Tarot Guidebook"/>
        </a>
      </div>
      <div class="column">
        <div>
          <p>
            The Hidden Dreams Tarot Guidebook is available in softcover, hardcover as well as pdf format.
          </p>
          <p>
            Along with descriptions of the cards and their meanings, the guidebook contains quick references to crystals, astrology,
            entheogens, runes, and more, beautifully illustrated.
          </p>
        </div>
        <div>
          Check out a  <a href="http://www.blurb.com/books/8697712-hidden-dreams-tarot" target="_blank" title="Hidden Dreams Tarot Guidebook Preview">Preview</a> now and
          <a href="http://www.blurb.com/books/8697712-hidden-dreams-tarot" target="_blank" title="Buy Hidden Dreams Tarot Guidebook Button">order your copy today.</a>
        </div>
      </div>
    </div>


    <!-- Cutie Pie -->
    <div id="cutie-pie">
      <h2>The CutiePie Tarot</h2>
      <h3>Designed with inclusivity and children in mind.</h3>
    </div>
    <div><iframe width="560" height="315" src="https://www.youtube.com/embed/OK4yx7mOcJE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    <div class="flex-columns">
      <div class="column">
        <img v-bind:src="cutiePieTarot" alt="Cutie Pie Tarot" title="Cutie Pie Tarot"/>
      </div>
      <div class="column">
        <div>
          <p>
            The main meaning or message of each card is distilled into a basic interpretation, and personified by a cute human character.  I wanted
            the characters to represent a really diverse collection of people in hopes that everyone can see themselves in this deck.
          </p>
          <p>
            This is a family friendly tarot deck, and comes in a sturdy rigid box, with the cards sized more like standard
            playing cards so they're easier to handle, particularly for little hands.
          </p>
        </div>
        <div>
          <br />
          <a href="http://www.makeplayingcards.com/sell/macpeters" target="_blank" title="Buy CutiePie Tarot Deck Button">Buy CutiePie Tarot Deck Now</a>
        </div>
      </div>
    </div>

    <signupForm/>
    <blogList/>
  </div>

</template>

<script>
  // Images
  import logoImage from "../assets/logo.png";
  import kickstarter from "../assets/tarot/hiddenDreamsTarotKickstarter.png";
  import cutiePieTarot from "../assets/tarot/macpeters_cutiePieTarot.png"
  import hiddenDreamsDeck from "../assets/tarot/hiddenDreamsTarotDeck.png"
  import hiddenDreamsCardSpread from "../assets/tarot/hiddenDreamsTarotSpread.png"
  import hiddenDreamsGuidebook from "../assets/tarot/hiddenDreamsTarotGuidebook.png"
  // Components
  import signupForm from '../components/signupForm.vue'
  import breadcrumbs from '../components/breadcrumbs.vue'
  // Blog
  // import blogList from '../components/blog.vue'

  export default {
  name: "Home",
  components: { signupForm, breadcrumbs },
  data() {
    return {
      logoImage: logoImage,
      kickstarter: kickstarter,
      cutiePieTarot: cutiePieTarot,
      hiddenDreamsDeck: hiddenDreamsDeck,
      hiddenDreamsGuidebook: hiddenDreamsGuidebook,
      hiddenDreamsCardSpread: hiddenDreamsCardSpread,
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/art', name: 'Art' },
        { link: '/tarot', name: 'Hidden Dreams Tarot' }
      ],
      blogFilter: 'tarot'
    };
  },
  head () {
    return {
      title: "Hidden Dreams Tarot by Mac Peters",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'artDescription', name: 'description', content: 'Most tarot decks dig deep into a single lore.  The Hidden Dreams Tarot synthesizes them all in one cohesive cross-cultural experience'},
        { hid: 'artAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Hidden Dreams and CutiePie Tarot by Mac Peters' },
        { hid: `og:url`, property: 'og:url', content: 'https://macpeters-vue.netlify.com/' },
        { hid: `og:description`, property: 'og:description', content: 'Most tarot decks dig deep into a single lore.  The Hidden Dreams Tarot synthesizes them all in one cohesive cross-cultural experience.' },
        { hid: `og:type`, property: 'og:type', content: 'website' },
        { hid: `og:image`, property: 'og:image', content: hiddenDreamsGuidebook }
      ],link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  }
};
</script>

<style scoped>
  h4 {
    margin: 20px;
  }
  #hidden-dreams {
    margin: 20px;
  }

  .flex-columns {
    margin: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .column {
    padding: 10px;
    width: 45%;
    display: inline-block;
  }

  .column img {
    max-height: 450px;
    width: 80%;
  }

  .columns a {
    text-decoration: none;
    font-weight: bold;
  }

  @media screen and (max-width: 700px){
    .column {
      width: 100%;
      display: block;
    }

    .column img {
      max-height: 450px;
      width: 100%;
    }
  }
</style>
