<template>
  <article>
    <h1>A Look Back - 2020</h1>
    <section>
      It's mid-way through 2021, and I usually do these annual posts around December.  It's been a time, though.  We have been under Covid
      lockdown for almost a year now, with only a vague sense that things might relax a bit now that there are some vaccines almost sort of
      available.  A year is a long time to think about priorities, and I was growing tired of the big city even before the pandemic hit North
      America as a thing that could happen here.  So most of my painting stuff is packed up, and I'll be embarking on a new adventure, somewhere
      quieter, more open, and with more nature.  I'm excited to see how that plays out in my art.   As for 2020, here's a wrap up of some of the art I
      did while confined to solitude at home.

      Take a look at my Instagram for more pics:
      <a href="https://www.instagram.com/macpetersart/"
        target="_blank">https://www.instagram.com/macpetersart/</a>
    </section>

    <div>
      <img v-bind:src="compassion" id="painting" alt="Compassion by Mac Peters" >
    </div>

    <section>
      <h2>Small Paintings</h2>
      <ul>
        <li>
          <h3>Miniature</h3>
            I did 3 dragonflies on 6X6 canvas, focussing on the tiny details such as the irredescent colours on the wings. I wanted to push
            myself to get right up close and sharpen my fine motor control.
        </li>
        <div>
          <img v-bind:src="dragonfly"
            alt="Dragonfly painting by Mac Peters" />
          <div class="caption">
            1 of 3 Dragonfly paintings
          </div>
        </div>

        <li>
          <h3>Commissions</h3>
          <p>
            Without looking for them, I ended up with a couple of commissions this year.  I'm not against commissions, but I tend
          to prefer just painting what I want to - I work as a web developer, so I don't need money from art to survive.  That being
          said, both of the requests I got seemed like interesting and challenging projects to me.
          </p>
          <p>
            The first was to paint a psychedelic portrait of someone's friend who had died recently.  It's difficult to paint something
          like that without thinking about all that sort of stuff, so it was challenging, emotionally, to be in that place.  On top
          of that, I really wanted to do justice to the person in question out of respect, even if I hadn't known them personally.
          </p>
          <p>
            The second commission was to 'paint God', which is a pretty tall order.  The exact wording of the request was simultaneously
            too much and too little information to go on.  I started, scrapped, and restarted the painting a bunch of times before I
            settled on something, and even that felt like something I just couldn't possibly pull off until it was finished.
          </p>
        </li>
        <div>
      <img v-bind:src="collin" alt="Memorial Painting of Collin" />
        <div class="caption">
          I tried out a different style of painting for this one, because I really wanted to push the psychedelic aspect
        </div>
      </div>
      </ul>
    </section>



    <section>
      <h2><a href="/art/fineArt" title="Paintings">Paintings</a></h2>
      <ul>
        <li>Dragonfly 1</li>
        <li>Dragonfly 2</li>
        <li>Dragonfly 3</li>
        <li>Cube 1</li>
        <li>Cube 2</li>
        <li>Collin</li>
        <li>Compassion</li>
      </ul>
    </section>

    <section>
      <div class="previous"><a href="/blogPosts/aLookBack2019">Recap 2019</a></div>
      <!-- <div class="next"><a href="">Recap 2021</a></div> -->
    </section>
  </article>
</template>

<script>
  import compassion     from "../../assets/fineArt/macpeters_compassion.jpg";
  import dragonfly     from "../../assets/fineArt/macpeters_dragonfly_01.jpg";
  import collin  from "../../assets/fineArt/macpeters_colin.png";

  export default {
     data() {
      return {
        dragonfly,
        collin,
        compassion
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
    max-width: 50vw;
  }

  .caption {
    font-size: 12px;
    color: #444;
  }

  #painting {
    width: 80%;
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
