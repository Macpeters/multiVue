<template>
  <div class="content">
    <h1>Macpeters: Background and Insights</h1>

    <breadcrumbs/>
    <!-- Artist Statement -->
    <article>
      <h2>Artist Statement</h2>
      <div class='bio'>
        <p>
          I create square paintings filled with other-worldly, dreamlike imagery.
          I paint with acrylic, usually with UV reactive paint.
          I mix together airbrush with brush paint in order to achieve different effects, and dabble in a bit of spray paint when the weather is nice.</p>
        <p>
          I want people to be able to recognise something of themselves in my art.
          I believe people can greatly benefit from knowing they aren’t alone in whatever they are feeling, even though their specific experience is unique.</p>
        <p>
          I grew up in relative silence - rarely speaking until well into adulthood.
          I find words are often misconstrued, or taken out of context.
          Through art it is possible to share the human experience and connect on a meaningful level.</p>
        <p>I am inspired by the vast biodiversity around us and the heights and depths which the human mind is capable experiencing in life.</p>
        <p>Follow me on <a href="https://www.instagram.com/macpetersart/" target="_blank">Instagram (@macpetersart)</a> to join me in my journey!</p>
      </div>
      <hr />
    </article>

    <!-- BIO -->
    <article>
      <h2>Biography</h2>
      <img v-bind:src="photo" class="bio-image" title="Mac Peters: Toronto based artist" alt="Mac Peters: Toronto based artist" />
      <p>Mac Peters is a mostly self-taught artist from Toronto, Canada, creating psychedelic/visionary and low-brow art.
      She works with acrylic paint and airbrush, usually blacklight reactive, as well as a bit of spray paint and digital imagery.
      She enjoys co-creating and collaborating with other artists, sharing, and cross-pollinating ideas, and stumbling on unchartered territory to explore.</p>
      <p>
        She has taken a few of workshops with artists she admires, such as Alex and Allyson Grey, Chris Dyer, Randal Roberts, and Morgan Mandalla.
        She believes that each has something different to teach. Some of her inspirations include
        She believes that through art it is possible to share this human experience and connect on a meaningful level.</p>
      <p>
        She is inspired by the vast bio diversity around us: the shining heights and murky depths that the human mind is capable of reaching.
        There are so many ways to experience life - and they are all beautiful.
        She wants people to be able to recognise something of themselves in her art - to feel what the characters do, and know they aren’t alone in whatever they are feeling, even though their specific experience is unique.</p>
      <hr>
    </article>

    <!-- Inspirations -->
    <article>
      <h3>Some of my Favourite Artists</h3>
      <span v-for="artist in favouriteArtists" :key='artist.id'>
        <span class="link-list"><a v-bind:href="artist.link">{{artist.name}}</a></span> |
      </span>
      <hr>
    </article>

    <article class="adorned">
      <h3>Adorned Road: A Path of Transformation</h3>
      <div class="columns">
        <div class="column">
          <img v-bind:src="nigelBook" class="book-img" title="Adorned Road: A Path of Transformation" />
        </div>
        <div class="column">
          My painting, Tree of Life, graces the cover of this poetry book by Nigel Bowers: <a href="https://www.amazon.ca/Adorned-Road-Transformation-Nigel-Bowers/dp/1798758652?SubscriptionId=AKIAILSHYYTFIVPWUY6Q&tag=duc12-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=1798758652">Adorned Road</a>, for sale on
          Amazon in paperback or kindle format.
        </div>
      </div>
    </article>

    <!-- History/CV -->
    <article class="history">
      <h2>History</h2>
      <artHistory/>
    </article>
  </div>
</template>

<script>
  // Images
  import photo from "../../assets/social/macpeters_photo.png";
  import nigelBook from "../../assets/nigelBook_ad.png"
  // Components
  import artHistory from '../../components/art/artHistory.vue'
  import breadcrumbs from '../../components/breadcrumbs.vue'
  export default {
    name: 'AboutArtist',
    components: { artHistory, breadcrumbs },
    data() {
      return {
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
        ],
        breadcrumbs: [
          { link: '/',  name: 'Home' },
          { link: '/art', name: 'Art' },
          { link: '/art', name: 'About' }
        ],
        photo: photo,
        nigelBook: nigelBook
      };
    }
};
</script>


<style scoped>
  article {  margin: 20px; }
  p { padding: 5px; }

  .columns {
    display: flex;
    flex-wrap: wrap;
    height: 350px;
    padding: 10px;
    margin: 10px;
  }
  .column {
    width: 45%;
  }

  a {
    text-decoration: none;
    padding: 1px 1px 0;
    font-weight: bold;
  }
  .link-list {
    padding: 10px;
    margin: 5px;
    display: inline-block;
  }
  .bio-image {
    max-width: 90vw;
  }

  @media screen and (max-width: 750px){
    .column {
      width: 100%;
    }
    .adorned {
      margin-bottom: 20px;
      height: 450px;
    }
    .link-list {
      padding: 5px;
      margin: 0px;
    }
  }

</style>
