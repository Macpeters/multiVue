<template>
  <div>
    <navBar />

    <h1>Murals and Aerosol Art</h1>
    <h2>Indoor and Outdoor murals to brighten up your business, home, or neighbourhood.</h2>

    <div class="page-description">
      I haven't used spraypaint for very long, but it sure is fun.
      Painting on walls is something I've been doing since I was 14 - my bedroom in highschool was one big mural.
      I find murals are the best opportunity to collaborate with other artists, because there's so much space.
      I'd love to work with more 3D spaces.
    </div>

    <imageList/>

    <contactBar/>
    
  </div>
</template>

<script>
// images
import chamBee from "../assets/graf/macpeters_chamBee.png";
import demolition from "../assets/graf/macpeters_demolitionParty.png";
import mouseBot from "../assets/graf/macpeters_mouseNBot.png";
import octoBuddy from "../assets/graf/macpeters_octoBuddy.png";
import pastaMancer from "../assets/graf/macpeters_pastaMancer.png";
import ribbit from "../assets/graf/macpeters_ribbit.png";
// Thumbnails
import chamBee_thumb from "../assets/graf/thumbnails/macpeters_chamBee.png";
import demolition_thumb from "../assets/graf/thumbnails/macpeters_demolitionParty.png";
import mouseBot_thumb from "../assets/graf/thumbnails/macpeters_mouseNBot.png";
import octoBuddy_thumb from "../assets/graf/thumbnails/macpeters_octoBuddy.png";
import pastaMancer_thumb from "../assets/graf/thumbnails/macpeters_pastaMancer.png";
import ribbit_thumb from "../assets/graf/thumbnails/macpeters_ribbit.png";
// components
import imageList from '../components/imageList.vue'
import navBar from '../components/navBar.vue'
import contactBar from '../components/contactBar.vue'

const base_keywords = "skateboards, skate art, skateboard art, painted decks, lowbrow, street art, recycled skateboards, sk8, skater, custom deck, psychedelic, visionary, ";

export default {
  name: "Murals",
  components: { imageList, navBar, contactBar },
  data() {
    return {
      images: [
        {
          image: chamBee,
          thumb: chamBee_thumb,
          title: "Chameleon, Wasp",
          subtitle: "Spray paint on garage door",
          description: "Chameleon, Sassy Wasp, painted on garage doors in the Alleyway of Dreams, Toronto.",
          keywords: "alleyway of dreams, alley, back alley, garage door, outdoor art, public art, spray paint, aerosol, wasp, bee, chameleon, sunset"
        },
        {
          image: demolition,
          thumb: demolition_thumb,
          title: "Alien summoning magic sweets",
          subtitle: "UV reactive acrylic on wall",
          description: "With the building to be demolished soon - this collaborative mural was done in the spirit of coming together to make friends, and create a magical experience.",
          keywords: base_keywords + "building, demolition, free for all, blacklight, jungle, dnb, party, collaboration, party art, pyramid, alien, summoning, sweetness, sugar, tentacles"
        },
        {
          image: mouseBot,
          thumb: mouseBot_thumb,
          title: "Oily Robot and Spray Mouse",
          subtitle: "Spray paint on abandoned construction wood",
          description: "Robot drooling oil, painted on abandoned construction board.  On the other side, a spray painting mouse",
          keywords: "robot, oil, drool, recycled, spraypaint, underpass park, under a bridge, mouse, montana, m94"
        },
        {
          image: octoBuddy,
          thumb: octoBuddy_thumb,
          title: "Octo-buddy",
          subtitle: "Acrylic on wall at Fulton Fitness, St. Catherines",
          description: "Weight lifting octopus gives encouragement to those working out at Fulton Fitness.",
          keywords: base_keywords + "octopuss, wight lifter, exercise, keeping in shape, fulton fitness, working out, motivation, tentacles"
        },
        {
          image: pastaMancer,
          thumb: pastaMancer_thumb,
          title: "Delicious Mushroom Wizard",
          subtitle: "Spray paint, brush paint on wall",
          description: "Mushroom Wizard enjoying some pasta at Pastamancers in London, Ontario",
          keywords: base_keywords + "restaurant, pastamancers, pasta, mushroom, spagetti, noodles, tomato sauce, yummy, magic spice, wizard, spray paint, aerosol"
        },
        {
          image: ribbit,
          thumb: ribbit_thumb,
          title: "Ribbit",
          subtitle: "Spray paint on wooden door",
          description: "Painted during a workshop at Mural Routes, Scarborough.",
          keywords: "frog, storm, ribbit, workshop, mediah, spraypaint, mural routes, scarborough, outdoor art"  
        }
      ],
      chosenImage: null
    };
  }
};
</script>

<style scoped>

  div {
    text-align: center
  }

</style>
