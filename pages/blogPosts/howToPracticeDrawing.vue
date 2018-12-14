<template>
  <article>
    <h1>10 Ways to Practice Drawing In Order to Improve Quickly</h1>
    <h2>Get the most from your practice in the shortest possible time</h2>
    <h3>May 13, 2018</h3>
    <div class="post">
      <ol>
        <li><span class="emphasize">Fundamentals: lines, circles, perspective, color theory.</span> This is stuff you're always going to
          need, regardless of what you like to draw.  <a href="http://drawabox.com/lesson/1">Draw A Box</a>
          has in-depth lessons from basic lines to complex organic or mechanical shapes. This kind of practice
          is possibly the least interesting, especially in basic levels, but it's super valuable. If you are
          between projects, and don't know what to draw, spend some time in this area.</li>
        <li><span class="emphasize">Drawing from Life.</span>  You can draw from photos, too, and that might even be easier, since you don't have
          to translate from 3D into 2D.  But you'll get better practice drawing from real life.  That ability to translate
          between dimensions is really useful.  More than that, though, life has movement, depth, and a certain intangible
          'realness' that photos can't seem to capture.
        </li>
        <li><span class="emphasize">Copying someone elses art.</span>  The purpose of this is to study how they do it - try and see what
          the original artist saw.  Best not to pass of those copies as your original art, though.  Don't
          trace - rather study the shapes, composition, and colour to really break down what they did and why.</li>
        <li><span class="emphasize">Iterative Drawing.</span>  Take a look at <a href="https://www.youtube.com/watch?v=k0ufz75UvHs">this video</a>
          for an overview.  But basically, try to draw a thing from memory.  Then look at what you drew, think about
          what's wrong with it, and try drawing it again better.  This method lets you deconstruct your own bad habits
          and really think about how things look.  Training yourself to figure out what something looks like when you
          aren't looking at it really helps when you want to draw something you can't get a reference for.</li>

        <span><img v-bind:src="practiceDrawing" alt="Studying drawing cats through many quick sketches" title="Studying drawing cats through many quick sketches" /></span>

        <li><span class="emphasize">More fast drawings.</span>  While it's fun to get into the details of a drawing, your skills will greatly benefit from
          drawing a lot of pictures quickly.  You often get 80% of your learning from the first 20% of the drawing.  You'll
          have far better flow, energy, expression, and composition if you draw a ton of pictures quickly, than if you just spend
          a lot of time on a handful of pictures.  Then, when you pick your favourite on to add details to, your final
          piece will be much more compelling.
        </li>
        <li><span class="emphasize">Study something from different angles.</span>  You can get a better feel for the space that an object or person
          occupies by seeing it from different angles.  This will help your art develop a sense of depth that the
          viewer can really feel.
        </li>
        <li><span class="emphasize">Study something in repetition.</span>  Draw the same thing over and over.  Divide a page up and draw the same
          thing in each section.  You'll see the improvements as you go.
        </li>
        <li><span class="emphasize"><a href="/blogPosts/whatIlearnedFromDrawingChallenge">Participate in Drawing Challenges.</a></span>  Stretch your imagination by drawing things that are outside your
          comfort zone.  Maybe you're really good at drawing horses, but there are a lot of things you avoid.  This
          is a good chance to notice what those things are, and address them.  You don't want to be making decisions
          about what to draw based on your skills - it limits your freedom, and it shows when an artist goes out of their
          way to avoid drawing something.  Do all your figures have their hands behind their back?  Do all your faces basically
          look the same? Do you have a lot of characters all just floating on a plain background?  <span class="emphasize">Try to
          break your bad habits by stepping out of your comfort zone once in a while.</span>
        </li>
        <li><span class="emphasize">Follow some tutorials.</span>  Talk to other artists about their process. There's no need to re-invent the wheel.  Many artists have come
          before you, and they've learned all sorts of neat tricks.  <a href="https://theetheringtonbrothers.blogspot.ca/2018/01/learnuary-day-two-part-one-full-set-of.html">These How-To-Think Tutorials</a>
          by the Etherington Brothers are a great resource.
        </li>
        <li><span class="emphasize">Draw Every Day</span> - even if you only have 10 minutes most days, spend those 10 minutes.  You'll
        gain much more from 10 minutes a day than 70 minutes in one chunk.  If you can spend more than 10 minutes, even better.  Just
        make sure you draw something every day.</li>
      </ol>
    </div>

  </article>
</template>

<script>
  import practiceDrawing from "../../assets/blogs/macpeters_practiceDrawing.png";

  export default {
    name: "NewPost",
    components: { },
    data() {
      return {
        practiceDrawing: practiceDrawing
      };
    }
};
</script>

<style scoped>
  .post {
    padding: 10px;
    width: 80%;
    line-height: 2em;
  }
  .emphasize {
    font-size: 1.5em;
    font-weight: bold;
  }
  img {
    padding-left: 20%;
  }
</style>
