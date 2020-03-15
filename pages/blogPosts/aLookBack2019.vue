<template>
  <article>
    <h1>A Look Back - 2019</h1>
    <section>
      It's December 31, 2019, and it seems like a great time to take a look back at the past year, and
      see what I've been up to, maybe think about what I'd like to do or experience in the coming year.  Take
      a look at my Instagram for more pics:
      <a href="https://www.instagram.com/macpetersart/" target="_blank">https://www.instagram.com/macpetersart/</a>
    </section>

    <section>
      <h2>New Ventures</h2>
      <ul>
        <li>
          <h3>Cartoons</h3>
          I've been heavily focussed on simplifying my art and working more on fundamentals.  Cartooning seemed the
          ideal style - I can ignore the details and keep my mind on form and expression.  I still think I need to push
          that a lot further, but I've started to get a little more comfortable with it.
        </li>

        <li>
          <h3>Colours and Eye Training</h3>
          I'm really keen on a weekly drawing challenge called Animal Alphabets (on Twitter and Instagram) that chooses
          a theme and then goes through the alphabet with a new prompt for each letter.  Previous themes included Extinct
          and Underwater, ending the year in the midst of Birds.  Underwater and Birds especially have allowed me to start
          finding my footing in digital painting.  I've been doing quick 'pencil' sketches followed by 'airbrush', and a
          quick 'erase' near the end to clean it all up.  Next year I want to put more time in getting used to using
          the pressure sensitivity.
        </li>

        <div>
          <img v-bind:src="robin" alt="Robin Red Breast by Mac Peters" />
          <div class="caption">
            The weekly Animal Alphabets challenge keeps me working on training my eye -
            and lets me work with tools I wouldn't normally use, while encouraging consistency
            within each alphabet.
          </div>
        </div>

        <li>
          <h3>Healing Visions Retreat</h3>
          I took the Healing Visions workshop at
          <a href="https://kataricenter.com/" target="_blank">Katari Center</a> -
          led by <a href="https://www.positivecreations.net/" target="_blank">Chris Dyer</a>
          with guest artist <a href="http://www.mauroart.com/" target="_blank"> Mauro Perez Reategui</a>.
          Of all the art workshops I've taken, this one had the least amount of actual art being done
          or art specific learning scheduled.  That being said, I definitely think it was a worthwhile
          venture.  A big part of what I get out of visionary art workshops is the opportunity to meet
          other visionary artists.  Time spent creating together and sharing ideas is never wasted.
        </li>
        <div>
      <img v-bind:src="mauro" alt="Mac Peters with Mauro Perez Reategui" />
        <div class="caption">
          Mauro did a quick workshop on one day of the retreat so we could see his process.  I tried
          following along for a bit, but he starts with opaque paint, and I use exclusively UV, so it
          doesn't work the same way.  It was neat to see how he goes from dark to light, though, and
          I started a painting that I'll hopefully be able to finish early in the new year.
        </div>
      </div>
      </ul>
    </section>



    <section>
      <h2>
        <a
        href="https://macpeters-drawings.netlify.com/"
        target="_blank"
        title="That Rat Bastard cartoon project">Drawing Projects</a></h2>
      <ul>
        <li>
          <h3>That Rat Bastard</h3>
          I have continued working on the character I started developing over October, and I've taken to
          calling him That Rat Bastard, and I've continued sketching him with more dynamic poses and
          facial expressions.  I still think I can push that expressiveness a lot more, so I want to
          continue working with cartoons.
        </li>

        <li>
          <h3>Draw 9</h3>
          As part of my work on improving fundamentals, I've spent some time on focussed studies of things I think
          I need more work on.  I practiced drawing darker skinned ladies, partly as a study for my Blue Face
          painting.  I practiced babies and children because their proportions are so different from adults, they
          require special attention.  Then I tried goats and mice/rats.  I found the mice and rats super
          easy compared to the goats - part of the reason I chose a rat as my Inktober character, but also
          a call to spend more time on hoofed animals, which are trickier to draw.
        </li>
      </ul>
    </section>

    <div>
      <img v-bind:src="blueFace" id="painting" alt="Warrior Girl by Mac Peters" >
    </div>


    <section>
      <h2><a href="/art/fineArt" title="Paintings">Paintings</a></h2>
      <ul>
        <li>Red Eye (working name)</li>
        <li>Green Eye (working name)</li>
        <li>Purple Eye (working name)</li>
        <li>Yellow Eye (working name)</li>
        <li>Warrior Girl</li>
        <li>Cactus Guy (working name)</li>
        <li>Cosmic Dancer</li>
        <li>Serenity</li>
      </ul>
    </section>

    <section>
      <div class="previous"><a href="/blogPosts/aLookBack2018">Recap 2018</a></div>
      <!-- <div class="next"><a href="">Recap 2020</a></div> -->
    </section>
  </article>
</template>

<script>
  import robin     from "../../assets/blogs/macpeters_robinRedBreast.png";
  import blueFace     from "../../assets/fineArt/macpeters_blueFace.jpg";
  import mauro  from "../../assets/blogs/macpeters_mauro.jpg";

  export default {
     data() {
      return {
        blueFace: blueFace,
        mauro: mauro,
        robin: robin
      };
    }
  };
</script>

<style scoped>
  section {
    text-align: left;
    padding: 10px;
  }

  li {
    list-style: none;
    padding: 5px;
  }
  img {
    max-width: 80vw;
  }

  .caption {
    font-size: 12px;
    color: #444;
  }

  #painting {
    width: 50%;
  }

  .previous {
    float: left;
    display: inline-block;
  }
  .next {
    float: right;
    display: inline-block;
  }
</style>
