<template>
  <div>
    <h1>What I learned from a 30 Day Drawing Challenge</h1>
    <h2>Tips and Benefits for Challenges to help you grow as an Artist</h2>
    <h3>September 9, 2017</h3>
    <div class="post">
      <h4>4 Tips for Surviving a Daily Drawing Challenge</h4>
      <ol>
        <li>Staying a couple of days ahead can give you little bit of room in case your life is just too busy on one day.</li>
        <li>Be aware of how much time you have.  Maybe you can't find time to draw a detailed picture every day. It might be helpful to timebox your drawings to 20 minutes or an hour. </li>
        <li>A daily challenge is difficult to keep up in the long term. These are best kept to a month so you can go back to your personal projects.  Try weekly challenges for long term.</li>
        <li>Don't expect to like every prompt.  Some are going to be more challenging, and these will stretch your creativity.  You may not like everything you come up with, but the point is just to do it.</li>
        <li>To make it extra fun, try limiting your style for this challenge.  Picking a theme such as minimal colors or cute and chubby can help you explore that theme and help you build a cohesive collection.</li>
      </ol>
      <span><img v-bind:src="drawingChallenge" alt="Monochromatic animals for 'Colour Collective' weekly challenge" title="Monochromatic animals for 'Colour Collective' weekly challenge" /></span>
      <h4>4 Benefits of Participating in a Drawing Challenge</h4>
      <ol>
        <li>After you've drawn your submission for each post, you can see how everyone else interpreted it.  This is great for inspiration, and picking up new tricks</li>
        <li>Network with a new group of artists.  Different artists try challenges at different times - you never know who you'll discover, or who will discover you.</li>
        <li>Turning daily art into a habit, if it wasn't already one.  Once you start, you feel more accountable for your participation.  Once you create a habit of daily art, it's easier to keep it up</li>
        <li>Find inspiration in new places: sometimes you can't think of what to draw, because there are too many options.  The daily prompt can give you a clear direction, make it easier to get started when you're feeling blocked.</li>
      </ol>

    </div>
  </div>
</template>

<script>
  import drawingChallenge from "../../assets/blogs/macpeters_drawingChallenge.png";

  export default {
    name: "whatILearnedFromDrawingChallenge",
    components: { },
    data() {
      return {
        drawingChallenge: drawingChallenge
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
    font-weight: bold;
  }
  img {
    padding-left: 20%;
  }
</style>
