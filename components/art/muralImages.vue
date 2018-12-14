<template>
  <div>
    <imageList/>
  </div>
</template>

<script>
// images
import logoImage          from "../../assets/logo.png";
// murals
import chamBee            from "../../assets/graf/macpeters_chamBee.png";
import demolition         from "../../assets/graf/macpeters_demolitionParty.png";
import hockeyBees         from "../../assets/graf/macpeters_hockeyBees.png";
import hockeyBeesComplete from "../../assets/graf/macpeters_hockeybees_complete.png";
import mouseBot           from "../../assets/graf/macpeters_mouseNBot.png";
import octoBuddy          from "../../assets/graf/macpeters_octoBuddy.png";
import pastaMancer        from "../../assets/graf/macpeters_pastaMancer.png";
import ribbit             from "../../assets/graf/macpeters_ribbit.png";
// Thumbnails
import chamBee_thumb      from "../../assets/graf/thumbnails/macpeters_chamBee.png";
import demolition_thumb   from "../../assets/graf/thumbnails/macpeters_demolitionParty.png";
import hockeyBees_thumb   from "../../assets/graf/thumbnails/macpeters_hockeyBees.png";
import mouseBot_thumb     from "../../assets/graf/thumbnails/macpeters_mouseNBot.png";
import octoBuddy_thumb    from "../../assets/graf/thumbnails/macpeters_octoBuddy.png";
import pastaMancer_thumb  from "../../assets/graf/thumbnails/macpeters_pastaMancer.png";
import ribbit_thumb       from "../../assets/graf/thumbnails/macpeters_ribbit.png";
// components
import imageList          from '../../components/art/imageList.vue'

const base_keywords = "murals, wall art, graffiti, urban art, outdoor art, public art, street art, local colour, ";

export default {
  name: "Murals",
  components: { imageList },
  data() {
    return {
      images: [
        {
          image: hockeyBees,
          thumb: hockeyBees_thumb,
          title: "Hockey Bees",
          subtitle: "UV reactive acrylic on wall",
          description: "Along the path to the new Meridian Center in St. Catherines, Ontario, this was painted as part of the Niagara International Mural Festival.  This photo shows the first day of work completed, while the panoramic photo above also shows the second day of work, which includes the poppy, grape vine, mushrooms, and saxophone playing moth.",
          keywords: base_keywords + "bridge, hockey bees, hockey, flying insects, pollinators, meridian center, st catherines, ontario, niagara international mural festival, chrome, sky, water, bugs, ice dogs, entertainment center, hockey arena, fuzzy moth, saxophone, music, musical notes, poppy, flower, mushrooms, chillaxing"
        },
        {
          image: chamBee,
          thumb: chamBee_thumb,
          title: "Chameleon, Wasp",
          subtitle: "Spray paint on garage door",
          description: "Chameleon, Sassy Wasp, painted on garage doors in the Alleyway of Dreams, Toronto.",
          keywords: base_keywords + "alleyway of dreams, alley, back alley, garage door, outdoor art, public art, spray paint, aerosol, wasp, bee, chameleon, sunset"
        },
        {
          image: demolition,
          thumb: demolition_thumb,
          title: "Alien summoning magic sweets",
          subtitle: "UV reactive/Blacklight painting on wall",
          description: "With the building to be demolished soon - this collaborative mural was done in the spirit of coming together to make friends, and create a magical experience.",
          keywords: base_keywords + "building, demolition, free for all, blacklight, jungle, dnb, party, collaboration, party art, pyramid, alien, summoning, sweetness, sugar, tentacles"
        },
        {
          image: mouseBot,
          thumb: mouseBot_thumb,
          title: "Oily Robot and Spray Mouse",
          subtitle: "Spray paint on abandoned construction wood",
          description: "Robot drooling oil, painted on abandoned construction board.  On the other side, a spray painting mouse",
          keywords: base_keywords + "robot, oil, drool, recycled, spraypaint, underpass park, under a bridge, mouse, montana, m94"
        },
        {
          image: octoBuddy,
          thumb: octoBuddy_thumb,
          title: "Octo-buddy",
          subtitle: "Acrylic on wall at Fulton Fitness, St. Catherines",
          description: "Weight lifting octopus gives encouragement to those working out at Fulton Fitness.",
          keywords: base_keywords + "octopuss, wight lifter, exercise, keeping in shape, fulton fitness, working out, motivation, tentacles, st catherines, niagara"
        },
        {
          image: pastaMancer,
          thumb: pastaMancer_thumb,
          title: "Delicious Mushroom Wizard",
          subtitle: "Spray paint, brush paint on wall",
          description: "Mushroom Wizard enjoying some pasta at Pastamancers in London, Ontario",
          keywords: base_keywords + "restaurant, pastamancers, pasta, mushroom, spagetti, noodles, tomato sauce, yummy, magic spice, wizard, spray paint, aerosol, wizard, magic mushroom"
        },
        {
          image: ribbit,
          thumb: ribbit_thumb,
          title: "Ribbit",
          subtitle: "Spray paint on wooden door",
          description: "Painted during a workshop at Mural Routes, Scarborough.",
          keywords: base_keywords + "frog, storm, ribbit, workshop, mediah, spraypaint, mural routes, scarborough, outdoor art"
        }
      ],
      chosenImage: null
    };
  }
};
</script>

<style scoped>
</style>