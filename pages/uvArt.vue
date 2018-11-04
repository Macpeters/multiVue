<template>
  <div>
    <navBar />
    <h1>Macpeters: UV Reactive Blacklight Art</h1>
    <breadcrumbs/>
    <artNav/>
    <h2>Visionary Psychedelic Blacklight Paintings</h2>

    <div class="page-description">
      <div id="neon"><a href="/art#no-neon">Blacklight Off</a></div>
      <p>
        I often work with a mixture of airbrush and brush paint, and I'll start with base (not blacklight/uv reactive) colours, 
        moving onto neon once I have the basic structure in place. Orbs and crystals are an ongoing theme for me these days.   
        I might work on one painting for months, adding layers to create depth, transparency, and different lighting effects. 
      </p>
    </div>

    <imageList/>

    <blogList/>

    <contactBar/>

  </div>
</template>

<script>
// Images
import baphomet_uv from "../assets/fineArtUv/macpeters_baphomet_uv.png";
import bliss_uv from "../assets/fineArtUv/macpeters_bliss_uv.png";
import cosmicKitten_uv from "../assets/fineArtUv/macpeters_cosmicKitten_uv.png"; 
import cracking_uv from "../assets/fineArtUv/macpeters_cracking_uv.png";
import eagerness_uv from "../assets/fineArtUv/macpeters_eagerness_uv.png";
import fascination_uv from "../assets/fineArtUv/macpeters_fascination_uv.png";
import gratitude_uv from "../assets/fineArtUv/macpeters_gratitude_uv.png";
import maskedFear_uv from "../assets/fineArtUv/macpeters_maskedFear_uv.png";
import mischief_uv from "../assets/fineArtUv/macpeters_mischeif_uv.png";
import shpongle_uv from "../assets/fineArtUv/macpeters_shpongle_uv.png";
import stubborn_uv from "../assets/fineArtUv/macpeters_stubbornResentment_uv.png";
// Thumbs
import baphomet_uv_thumb from "../assets/fineArtUv/thumbnails/macpeters_baphomet_uv.png";
import bliss_uv_thumb from "../assets/fineArtUv/thumbnails/macpeters_bliss_uv.png";
import cosmicKitten_uv_thumb from "../assets/fineArtUv/thumbnails/macpeters_cosmicKitten_uv.png"; 
import cracking_uv_thumb from "../assets/fineArtUv/thumbnails/macpeters_cracking_uv.png";
import eagerness_uv_thumb from "../assets/fineArtUv/thumbnails/macpeters_eagerness_uv.png";
import fascination_uv_thumb from "../assets/fineArtUv/thumbnails/macpeters_fascination_uv.png";
import gratitude_uv_thumb from "../assets/fineArtUv/thumbnails/macpeters_gratitude_uv.png";
import maskedFear_uv_thumb from "../assets/fineArtUv/thumbnails/macpeters_maskedFear_uv.png";
import mischief_uv_thumb from "../assets/fineArtUv/thumbnails/macpeters_mischief_uv.png";
import shpongle_uv_thumb from "../assets/fineArtUv/thumbnails/macpeters_shpongle_uv.png";
import stubborn_uv_thumb from "../assets/fineArtUv/thumbnails/macpeters_stubbornResentment_uv.png";
// Components
import artNav from '../components/artNav.vue'
import imageList from '../components/imageList.vue'
import navBar from '../components/navBar.vue'
import contactBar from '../components/contactBar.vue'
import breadcrumbs from '../components/breadcrumbs.vue'
// Blog
import blogList from '../components/blog.vue'

const base_keywords = "painting, visionary, sci-fi, art, blacklight, uv reactive, psychedelic, psychedelic painting, fantasy, "

export default {
  name: "Art",
  components: { imageList, navBar, contactBar, breadcrumbs, blogList, artNav },
  data() {
    return {
      images: [
        {
          image: cosmicKitten_uv,
          thumb: cosmicKitten_uv_thumb,
          title: "Cosmic Kitten",
          subtitle: "24x24 UV Acrylic on canvas",
          description: "Kitten enjoys the journey, the spectacle, the festival of creation through space and time",
          keywords: base_keywords + 'space, cosmos, kitten, cosmic, galaxies, universe, festival, edm, trippy, cat, kitten, space cat'
        },
        {
          image: shpongle_uv,
          thumb: shpongle_uv_thumb,
          title: "Dancing With the Universe AKA Shpongle: Codex 6",
          subtitle: "18x18 UV Acrylic on canvas",
          description: "You are the Universe enjoying a dance through one timeline from one perspective, and the Universe is watching your dance, and everyone else's, experiencing itself in every way",
          keywords: base_keywords + "shpongle, psytrance, goa, codex6, codex 6, album art, cover art, universe, watching itself, self observation, meta, self referencing, feather, feather pen, dancing, clay, clay bodies, veiny, space, stars, forever, earth, life, path of enlightenment, from the earth, logos, the word"
        },
        {
          image: baphomet_uv,
          thumb: baphomet_uv_thumb,
          title: "Baphomet - Magic Mushroom Magician",
          subtitle: "24x24 UV Acrylic on canvas",
          description: "Floating above the golden city that sits on the edge of the Amethyst Mountains, young Baphomet pays no mind to the dance of mortals, for he is filled with the light of the Universe. This piece is what I'm referring to as 'living art', because I haven't varnished it, and I don't plan to until it sells.  I find if I have art around for a little while, I start noticing things I'd like to change, because I've learned new tricks since then.  If I don't varnish the piece, I feel I have the option of going back and updating old art, so it stays interesting to me.  Maybe I'll ruin it, next time I touch it.  Who knows?  If you like how it looks right now, contact me for purchasing.",
          keywords: base_keywords + 'baphomet, goat, magician, wonder, magick, magic mushroom, wizardry, horns, horned beast, universal power, universal wonder, inner power, galaxies, otherworldly, glass mushroom, amethyst crystal, seaside city, stone city'
        },
        {
          image: fascination_uv,
          thumb: fascination_uv_thumb,
          title: "Fascination",
          subtitle: "24x24 UV Acrylic on canvas",
          description: "Behold the biodiversity of this alien crystaline planet.  What wonders it might hold!",
          keywords: base_keywords + 'white squirrel, butterfly, bubbles, crystals, crystal mountain, cloud faces, long tail, furry animal, cute animal, leafy, water, calm water, flying, serpent, snake skin, sparkle, drops'
        },
        {
          image: cracking_uv,
          thumb: cracking_uv_thumb,
          title: "Cracking Under the Pressure",
          subtitle: "18x18 UV Acrylic on canvas",
          description: "Intense pressure and stress mean that you've outgrown your shell - when it cracks, you are free to grow a new one.  Check out Twerski on stress for a neat talk.",
          keywords: base_keywords + "crystal, cracked, pressure, anger, rage, breaking, growth, transformation, seething, fractured, reflection, crystals, bubbles, perspectives, shards, metatrons cube, sacred geometry, darkness, light"
        },
        {
          image: bliss_uv,
          thumb: bliss_uv_thumb,
          title: "Bliss",
          subtitle: "18x18 UV Acrylic on canvas",
          description: "As a jellyfish, Bliss has no weight, and no resistance to the changing currents of the world. He enjoys every ripple to the fullest extent.",
          keywords: base_keywords + "monster, jellyfish, bliss, happiness, higher realms, joy, comfort, go with the flow, enjoyment, weightlessness, smiling, free, nirvana, heavenly"
        },
        {
          image: eagerness_uv,
          thumb: eagerness_uv_thumb,
          title: "Eagerness",
          subtitle: "18x18 UV Acrylic on canvas",
          description: "Eagerness has his eye on a treat, and is in a hurry to get a taste of it.",
          keywords: base_keywords + "monster, feels monster, emotional, eager, wanting, longing, craving, drive, driving force, excitement, tentacles, eyeball, long tongue, long tail, stripes, pink and green"
        },
        {
          image: gratitude_uv,
          thumb: gratitude_uv_thumb,
          title: "Gratitude",
          subtitle: "24x24 UV Acrylic on canvas",
          description: "Accepting the gift of light, and giving gratitude in return.",
          keywords: base_keywords + "gratitude, appreciation, morning sun, gift of light, life, grateful, thank you, arise, gift, water, growth, becoming, being, existence"
        },
        {
          image: stubborn_uv,
          thumb: stubborn_uv_thumb,
          title: "Stubborn Resentment",
          subtitle: "18x18 UV Acrylic on canvas",
          description: "He has had just about enough.  Careful you don't push him too far, as he's liable to lash out.",
          keywords: base_keywords + "monster, underwater, cavern, cave, stubborn, resentment, amusing, fishy, pearlescent, unhappy, bitter, hurt, grumpy, rocks, tunnel, wrinkles"
        },
        {
          image: mischief_uv,
          thumb: mischief_uv_thumb,
          title: "Mischief",
          subtitle: "18x18 UV Acrylic on canvas",
          description: "Did you see snakes in her hair?  Look again.  Mischief likes to play harmless tricks.  She is the spirit of Nature in spring, playful and fun.",
          keywords: base_keywords + "mischeif, life, diversity, games, pranks, camoflage, flowers, earth goddess, gaia, spring, hope, enjoyment, festival, smiles, friendliness, vines, plants, hair, medussa"
        },
        {
          image: maskedFear_uv,
          thumb: maskedFear_uv_thumb,
          title: "Masked Fear",
          subtitle: "18x18 UV Acrylic on canvas",
          description: "Afraid to come out of the dark, Fear holds out a scary mask to frighten away whatever might be waiting out there.",
          keywords: base_keywords + "masks, hiding, fear, anxiety, anxious, dread, expectation, monsters, imagining, rats, insects, cracks, caverns, darkness, defense, defense mechanism, false face, trickery, monster mask, lizard, reptile, terror"
        }
      ],
      chosenImage: null,
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/art', name: 'Paintings' },
        { link: '/art', name: 'FineArt' }
      ],
      blogFilter: 'visionary art',
      name: 'fine-art'
    };
  },
  head () {
    return {
      title: "Macpeters UV Reactive Blacklight Paintings",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'artDescription', name: 'description', content: 'Psychedelic, visionary blacklight paintings incorporating low-brow pop surrealism and metamodernism. Created by Toronto artist, Mac Peters.'},
        { hid: 'artAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Macpeters UV Reactive Blacklight Paintings' },
        { hid: `og:url`, property: 'og:url', content: 'https://macpeters-vue.netlify.com/uvArt/' },
        { hid: `og:description`, property: 'og:description', content: 'Psychedelic, visionary blacklight paintings incorporating low-brow pop surrealism and metamodernism. Created by Toronto artist, Mac Peters.' },
        { hid: `og:type`, property: 'og:type', content: 'website' },
        { hid: `og:image`, property: 'og:image', content: bliss_uv }
      ]
    }
  }
};
</script>

<style scoped>
  div {
    background-color: black;
    color: white;
    text-align: center;
  }

  #neon{
    font-size: 30px;
    font-family: 'Futura';
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #ff0080, 0 0 40px #ff0080, 0 0 55px #ff0080, 0 0 75px #ff0080;
    text-align: center;
  }

</style>
