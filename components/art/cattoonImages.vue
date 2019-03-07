<template>
  <div>
    <imageList/>
  </div>
</template>

<script>
// images
import costumed   from "../../assets/cartoons/cats/macpeters_series_01_costumed.png";
import cute       from "../../assets/cartoons/cats/macpeters_series_01_cute.png";
import halloween  from "../../assets/cartoons/cats/macpeters_series_01_halloween.png";
import movie      from "../../assets/cartoons/cats/macpeters_series_01_movie.png";
import mythical   from "../../assets/cartoons/cats/macpeters_series_01_mythical.png";

// Thumbnails
import costumed_thumb    from "../../assets/cartoons/cats/thumbnails/macpeters_series_01_costumed.png";
import cute_thumb        from "../../assets/cartoons/cats/thumbnails/macpeters_series_01_cute.png";
import halloween_thumb   from "../../assets/cartoons/cats/thumbnails/macpeters_series_01_halloween.png";
import movie_thumb       from "../../assets/cartoons/cats/thumbnails/macpeters_series_01_movie.png";
import mythical_thumb    from "../../assets/cartoons/cats/thumbnails/macpeters_series_01_mythical.png";


// components
import imageList from '../../components/art/imageList.vue'

const base_keywords = "cartoon, cartooning, digital art, cat, toon, kitty, ";

export default {
  name: "Cattoons",
  components: { imageList },
  data() {
    return {
      images: [
        {
          image: costumed,
          thumb: costumed_thumb,
          title: "Series One: Tricksy Kitties",
          description: "Sneaky tricksters, hiding in shadows, wearing masks, knocking things over.",
          keywords: base_keywords + "jester, trickster, masquerade, mardi gras, party cat, spiders, stuffed cat, hoodie, thug"
        },
        {
          image: cute,
          thumb: cute_thumb,
          title: "Series One: Catty Antics",
          description: "Cats being endlessly amusing with their day to day antics",
          keywords: base_keywords + "mousecatcher, mouser, cat bath, princess kitten, cat in box, christmas kitty, costumed cat, dreameater, baku"
        },
         {
          image: halloween,
          thumb: halloween_thumb,
          title: "Series One: Halloween Cats",
          description: "Catober - the cats of October, getting into Autumn trouble",
          keywords: base_keywords + "jackolantern, pumpkin, pumpkinhead, ghost, skeleton cat, toybox, witch kitty, alleycat, scaredycat, spooky, frighten, midnight"
        },
        {
          image: movie,
          thumb: movie_thumb,
          title: "Series One: Movie Cats",
          description: "Famous characters, reimagined as cats",
          keywords: base_keywords + "hannibal lector, silence of the lambs, cannibal, harry potter, wizard cat, spellcaster, stranger things, demogorgon, hellspawn, hellfire, brimstone, devilish"
        },
        {
          image: mythical,
          thumb: mythical_thumb,
          title: "Series One: Mythical Cats",
          description: "Cats of Folklore",
          keywords: base_keywords + "horned feline, egyptian, mummy, silth, black widow, zombie, spider, fae, fairy, murder of crows"
        }
      ],
      chosenImage: null
    };
  }
};
</script>

<style scoped>

</style>
