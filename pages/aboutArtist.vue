<template>
  <div>
    <navBar />
    <h1>Macpeters: Background and Insights</h1>
    <!-- Artist Statement -->
    <div>
      <h2>Artist Statement</h2>
      <div>
        <p>I create square paintings filled with other-worldly, dreamlike imagery.
          I paint with acrylic, usually with UV reactive paint.
          I mix together airbrush with brush paint in order to achieve different effects, and dabble in a bit of spray paint when the weather is nice.</p>
        <p>I want people to be able to recognise something of themselves in my art.
          I believe people can greatly benefit from knowing they aren’t alone in whatever they are feeling, even though their specific experience is unique.</p>
        <p>I grew up in relative silence - rarely speaking until well into adulthood.
          I find words are often misconstrued, or taken out of context.
          Through art it is possible to share the human experience and connect on a meaningful level.</p>
        <p>I am inspired by the vast biodiversity around us and the heights and depths which the human mind is capable experiencing in life.</p>
        <p>Follow me on <a href="https://www.instagram.com/macpetersart/" target="_blank">Instagram (@macpetersart)</a> to join me in my journey!</p>
      </div>
    </div>

    <!-- BIO -->
    <div>
      <h2>Biography</h2>
      <p>Mac Peters is a mostly self-taught artist from Toronto, Canada, creating psychedelic/visionary and low-brow art.
      She works with acrylic paint and airbrush, usually blacklight reactive, as well as a bit of spray paint and digital imagery.
      She enjoys co-creating and collaborating with other artists, sharing, and cross-pollinating ideas, and stumbling on unchartered territory to explore.</p>
      <p>She has taken a few of workshops with artists she admires, such as Alex and Allyson Grey, Chris Dyer, Randal Roberts, and Morgan Mandalla.
        She believes that each has something different to teach. Some of her inspirations include
        She believes that through art it is possible to share this human experience and connect on a meaningful level.</p>
      <p>She is inspired by the vast bio diversity around us: the shining heights and murky depths that the human mind is capable of reaching.
        There are so many ways to experience life - and they are all beautiful.
        She wants people to be able to recognise something of themselves in her art - to feel what the characters do, and know they aren’t alone in whatever they are feeling, even though their specific experience is unique.</p>
    </div>

    <!-- Inspirations -->
    <div>
      <h3>Some of my Favourite Artists</h3>
      <span v-for="artist in favouriteArtists" :key='artist.id'>
        <span class="link-list"><a v-bind:href="artist.link">{{artist.name}}</a></span> |
      </span>
    </div>

    <!-- History/CV -->
    <div>
      <artHistory/>
    </div>

    <contactBar/>
  </div>
</template>

<script>
  // Images
  import email from "../assets/social/email.png";
  import facebook from "../assets/social/facebook.png";
  import instagram from "../assets/social/instagram.png";
  import twitter from "../assets/social/twitter.png";
  // Components
  import navBar from '../components/navBar.vue'
  import contactBar from '../components/contactBar.vue'
  import artHistory from '../components/artHistory.vue'
  export default {
    name: "aboutArtist",
    components: { navBar, contactBar, artHistory },
    data() {
      return {
        socialButtons: [
          {
            title: 'Email',
            image: email,
            url: 'mailto:peters.maryanne@gmail.com'
          }
        ],
        favouriteArtists: [
          {
            name: 'Alex Grey',
            link: 'http://alexgrey.com/'
          },
          {
            name: 'Allyson Grey',
            link: 'https://www.allysongrey.com/'
          },
          {
            name: 'Bosch',
            link: 'http://www.hieronymus-bosch.org/the-complete-works.html'
          },
          {
            name: 'Chris Dyer',
            link: 'http://positivecreations.ca/'
          },
          {
            name: 'Etien',
            link: 'http://etien.fr/'
          },
          {
            name: 'Morgan Mandala',
            link: 'https://www.morganmandala.com/'
          },
          {
            name: 'Naoto Hattori',
            link: 'http://www.naotohattori.com/'
          },
          {
            name: 'Neil Gibson',
            link: 'https://www.facebook.com/neilgibsoncreations/'
          },
          {
            name: 'Olga Klimova',
            link: 'http://www.olgaklimova.com/#!about/cfvg'
          },
          {
            name: 'Randal Roberts',
            link: 'https://www.allofthisisforyou.com/'
          }
          ,
          {
            name: 'Tom LaPierre',
            link: 'http://www.kinsmanrobinson.com/dynamic/artist.asp?ArtistID=7'
          }
        ]
      };
    }
};
</script>


<style scoped>
  a {
    text-decoration: none;
    padding: 1px 1px 0;
    font-weight: bold;
  }
  .link-list {
    padding: 20px;
    margin: 10px;
    display: inline;
  }

</style>
