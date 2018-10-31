<template>
  <div>
    <navBar />
    <h1>Macpeters: Fine Art</h1>
    <breadcrumbs/>
    <artNav/>
    <h2>Visionary Psychedelic Blacklight Paintings</h2>

    <div class="page-description">
      <div class="no-neon"><a href="/uvArt">Blacklight On</a></div>
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
import baphomet from "../assets/fineArt/macpeters_baphomet.png";
import bliss from "../assets/fineArt/macpeters_bliss.png";
import cosmicKitten from "../assets/fineArt/macpeters_cosmicKitten.png"; 
import cracking from "../assets/fineArt/macpeters_crackingUnderThePressure.png";
import eagerness from "../assets/fineArt/macpeters_eagerness.png";
import fascination from "../assets/fineArt/macpeters_fascination.png";
import gratitude from "../assets/fineArt/macpeters_gratitude.png";
import lovebird from "../assets/fineArt/macpeters_loveBird.png";
import maskedFear from "../assets/fineArt/macpeters_maskedFear.png";
import mischeif from "../assets/fineArt/macpeters_mischeif.png";
import monsterball from "../assets/fineArt/macpeters_monsterball.png";
import shpongle from "../assets/fineArt/macpeters_shpongle.png";
import starbird from "../assets/fineArt/macpeters_starBird.png";
import stubborn from "../assets/fineArt/macpeters_stubbornResentment.png";
// Thumbs
import baphomet_thumb from "../assets/fineArt/thumbnails/macpeters_baphomet.png";
import bliss_thumb from "../assets/fineArt/thumbnails/macpeters_bliss.png";
import cosmicKitten_thumb from "../assets/fineArt/thumbnails/macpeters_cosmicKitten.png"; 
import cracking_thumb from "../assets/fineArt/thumbnails/macpeters_crackingUnderThePressure.png";
import eagerness_thumb from "../assets/fineArt/thumbnails/macpeters_eagerness.png";
import fascination_thumb from "../assets/fineArt/thumbnails/macpeters_fascination.png";
import gratitude_thumb from "../assets/fineArt/thumbnails/macpeters_gratitude.png";
import lovebird_thumb from "../assets/fineArt/thumbnails/macpeters_loveBird.png";
import maskedFear_thumb from "../assets/fineArt/thumbnails/macpeters_maskedFear.png";
import mischeif_thumb from "../assets/fineArt/thumbnails/macpeters_mischeif.png";
import monsterball_thumb from "../assets/fineArt/thumbnails/macpeters_monsterball.png";
import shpongle_thumb from "../assets/fineArt/thumbnails/macpeters_shpongle.png";
import starbird_thumb from "../assets/fineArt/thumbnails/macpeters_starBird.png";
import stubborn_thumb from "../assets/fineArt/thumbnails/macpeters_stubbornResentment.png";
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
          image: cosmicKitten,
          thumb: cosmicKitten_thumb,
          title: "Cosmic Kitten",
          subtitle: "24x24 UV Acrylic on canvas",
          description: "Kitten enjoys the journey, the spectacle, the festival of creation through space and time",
          keywords: base_keywords + 'space, cosmos, kitten, cosmic, galaxies, universe, festival, edm, trippy, cat, kitten, space cat'
        },
        {
          image: baphomet,
          thumb: baphomet_thumb,
          title: "Baphomet - Magic Mushroom Magician",
          subtitle: "24x24 UV Acrylic on canvas",
          description: "Floating above the golden city that sits on the edge of the Amethyst Mountains, young Baphomet pays no mind to the dance of mortals, for he is filled with the light of the Universe. This piece is what I'm referring to as 'living art', because I haven't varnished it, and I don't plan to until it sells.  I find if I have art around for a little while, I start noticing things I'd like to change, because I've learned new tricks since then.  If I don't varnish the piece, I feel I have the option of going back and updating old art, so it stays interesting to me.  Maybe I'll ruin it, next time I touch it.  Who knows?  If you like how it looks right now, contact me for purchasing.",
          keywords: base_keywords + 'baphomet, goat, magician, wonder, magick, magic mushroom, wizardry, horns, horned beast, universal power, universal wonder, inner power, galaxies, otherworldly, glass mushroom, amethyst crystal, seaside city, stone city'
        },
        {
          image: gratitude,
          thumb: gratitude_thumb,
          title: "Gratitude",
          subtitle: "24x24 UV Acrylic on canvas",
          description: "Accepting the gift of light, and giving gratitude in return.",
          keywords: base_keywords + "gratitude, appreciation, morning sun, gift of light, life, grateful, thank you, arise, gift, water, growth, becoming, being, existence"
        },
        {
          image: fascination,
          thumb: fascination_thumb,
          title: "Fascination",
          subtitle: "24x24 UV Acrylic on canvas",
          description: "Behold the biodiversity of this alien crystaline planet.  What wonders it might hold!",
          keywords: base_keywords + 'white squirrel, butterfly, bubbles, crystals, crystal mountain, cloud faces, long tail, furry animal, cute animal, leafy, water, calm water, flying, serpent, snake skin, sparkle, drops'
        },
        {
          image: cracking,
          thumb: cracking_thumb,
          title: "Cracking Under the Pressure",
          subtitle: "18x18 UV Acrylic on canvas",
          description: "Intense pressure and stress mean that you've outgrown your shell - when it cracks, you are free to grow a new one.  Check out Twerski on stress for a neat talk.",
          keywords: base_keywords + "crystal, cracked, pressure, anger, rage, breaking, growth, transformation, seething, fractured, reflection, crystals, bubbles, perspectives, shards, metatrons cube, sacred geometry, darkness, light"
        },
        {
          image: bliss,
          thumb: bliss_thumb,
          title: "Bliss",
          subtitle: "18x18 UV Acrylic on canvas",
          description: "As a jellyfish, Bliss has no weight, and no resistance to the changing currents of the world. He enjoys every ripple to the fullest extent.",
          keywords: base_keywords + "monster, jellyfish, bliss, happiness, higher realms, joy, comfort, go with the flow, enjoyment, weightlessness, smiling, free, nirvana, heavenly"
        },
        {
          image: eagerness,
          thumb: eagerness_thumb,
          title: "Eagerness",
          subtitle: "18x18 UV Acrylic on canvas",
          description: "Eagerness has his eye on a treat, and is in a hurry to get a taste of it.",
          keywords: base_keywords + "monster, feels monster, emotional, eager, wanting, longing, craving, drive, driving force, excitement, tentacles, eyeball, long tongue, long tail, stripes, pink and green"
        },
        {
          image: stubborn,
          thumb: stubborn_thumb,
          title: "Stubborn Resentment",
          subtitle: "18x18 UV Acrylic on canvas",
          description: "He has had just about enough.  Careful you don't push him too far, as he's liable to lash out.",
          keywords: base_keywords + "monster, underwater, cavern, cave, stubborn, resentment, amusing, fishy, pearlescent, unhappy, bitter, hurt, grumpy, rocks, tunnel, wrinkles"
        },
        {
          image: maskedFear,
          thumb: maskedFear_thumb,
          title: "Masked Fear",
          subtitle: "18x18 UV Acrylic on canvas",
          description: "Afraid to come out of the dark, Fear holds out a scary mask to frighten away whatever might be waiting out there.",
          keywords: base_keywords + "masks, hiding, fear, anxiety, anxious, dread, expectation, monsters, imagining, rats, insects, cracks, caverns, darkness, defense, defense mechanism, false face, trickery, monster mask, lizard, reptile, terror"
        },
        {
          image: mischeif,
          thumb: mischeif_thumb,
          title: "Mischief",
          subtitle: "18x18 UV Acrylic on canvas",
          description: "Did you see snakes in her hair?  Look again.  Mischief likes to play harmless tricks.  She is the spirit of Nature in spring, playful and fun.",
          keywords: base_keywords + "mischeif, life, diversity, games, pranks, camoflage, flowers, earth goddess, gaia, spring, hope, enjoyment, festival, smiles, friendliness, vines, plants, hair, medussa"
        },
        {
          image: monsterball,
          thumb: monsterball_thumb,
          title: "Monsterball",
          subtitle: "12x12 UV Acrylic on canvas",
          description: "Monsterball is everyone you meet who is putting up a false front.  You can't tell what their motivations are, so interacting with them is like trying to navigate a dark labyrinth, always wondering if it's even worth the trouble.  I mean, if they can't ever be honest, is knowing them more trouble than it's worth?",
          keywords: base_keywords + "monster, maze, headgames, tricks, lies, deceipt, deception, motivations, alterior motives, untrue, distrust, loss of faith, lack of purpose, mean, dangerous, stranger danger, bricks, hidden depths, unknown places, lost, loss of direction, navigation"
        },
        {
          image: shpongle,
          thumb: shpongle_thumb,
          title: "Dancing With the Universe AKA Shpongle: Codex 6",
          subtitle: "18x18 UV Acrylic on canvas",
          description: "You are the Universe enjoying a dance through one timeline from one perspective, and the Universe is watching your dance, and everyone else's, experiencing itself in every way",
          keywords: base_keywords + "shpongle, psytrance, goa, codex6, codex 6, album art, cover art, universe, watching itself, self observation, meta, self referencing, feather, feather pen, dancing, clay, clay bodies, veiny, space, stars, forever, earth, life, path of enlightenment, from the earth, logos, the word"
        },
        {
          image: lovebird,
          thumb: lovebird_thumb,
          title: "Love Bird",
          subtitle: "12x12 UV Acrylic on canvas",
          description: "Real Love persists when passion cools, and wants nothing in return.",
          keywords: base_keywords + "bird, moon, feeling love, heart, warm feelings, warm glow, receiving love, enjoying love, floating, love of the heart"
        },
        {
          image: starbird,
          thumb: starbird_thumb,
          title: "Star Bird",
          subtitle: "12x12 UV Acrylic on canvas",
          description: "Shooting through space, Star Bird is just enjoying the journey for what it is and sharing that enjoyment freely",
          keywords: base_keywords + "bird, star, crystal, shard, heart, soaring, enjoyment, life, space, giving love, enjoying love, flight, love of the universe"
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
      title: "Macpeters Original Fine Art Paintings",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'artDescription', name: 'description', content: 'Psychedelic, visionary blacklight paintings incorporating low-brow pop surrealism and metamodernism. Created by Toronto artist, Mac Peters.'},
        { hid: 'artAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Macpeters Original Fine Art Paintings' },
        { hid: `og:url`, property: 'og:url', content: 'https://macpeters-vue.netlify.com/art/' },
        { hid: `og:description`, property: 'og:description', content: 'Psychedelic, visionary blacklight paintings incorporating low-brow pop surrealism and metamodernism. Created by Toronto artist, Mac Peters.' },
        { hid: `og:type`, property: 'og:type', content: 'website' },
        { hid: `og:image`, property: 'og:image', content: bliss }
      ]
    }
  }
};
</script>

<style scoped>
  div {
    text-align: center
  }

  .no-neon{
    font-size: 30px;
    font-family: 'Futura';
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #ff0080, 0 0 40px #ff0080, 0 0 55px #ff0080, 0 0 75px #ff0080;
    text-align: center;
  }

</style>
