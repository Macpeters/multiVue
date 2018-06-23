<template>
  <div>
    <navBar />

    <h1>Tarot and The Pursuit of Better</h1>
    <h2>How Tarot can represent a conscious decision to pursue a higher goal</h2>
    <h3>April 5, 2018</h3>
    <div class="post">
     <p>
       I’ve long been fascinated by different mythologies and ancient lore.  Vastly different 
       cultures developed a lot of the same archetypal stories.  There a dozens of stories that 
       parallel that of Jesus, many of which existed much earlier.  It’s certainly easy to find 
       and argue over the differences, but there are still striking similarities across time 
       and geography.  Of the billions of stories that humans have lived and created, it’s easy 
       to wonder why <span class="emphasize">certain stories are so compelling that we keep coming back to them.</span>
      </p>

      <p>
        The most obvious example is the Hero’s Journey.  Many of the most time-tested fantasy, sci-fi, 
        and adventure stories are some variation of the Hero’s Journey.  A tiny hobbit from a small 
        town goes on a big, dangerous quest, makes great sacrifices, and is transformed into something 
        stronger, capable of literally saving the world from certain destruction.  <span class="emphasize">
        All he has to do, in the end, is fight the lower level motivations that would stop him from doing 
        the right thing.</span>
      </p>

      <span><img v-bind:src="tarotJourney" alt="Studying drawing cats through many quick sketches" title="Studying drawing cats through many quick sketches" /></span>

      <p>
        The idea is that the journey leading up to that final moment has tried and tested our hero, 
        and that he would not have made it that far if he wasn’t capable of succeeding.  All along 
        the way he was forced to confront himself, and those around him, in order to unravel the motivations 
        and truths.  Every step towards the goal was a step away from home, from comfort, from the known, 
        and so every step was a sort of sacrifice.  He lost most of his friends along the way, and was 
        forced into an uneasy alliance with something he didn’t trust, and wasn’t comfortable with.  
        <span class="emphasize">The one thing that remains with the hero, that keeps him moving towards his goal, is the unwavering 
        belief that it is absolutely worth it, no matter the cost to him.</span> The reward for all of this 
        sacrifice is bigger than our hero, and that keeps him moving, despite everything.
      </p>

      <p>
        You can replace all the details of the story and re-tell it a thousand times, and it will never get 
        old, because it is the driving story of our own lives.  All of our own achievements, great and small, 
        came through some effort, required some sacrifice, and was pursued because we held a belief that 
        it would be worth it.  <span class="emphasize">There is no end to striving while we live – to live is to strive.
        </span> So the story remains, as long as we do.
      </p>

      <p>
        Whether you believe in the magic of the cards or not, isn’t even the point.  Any card you pull from 
        the deck will have something important to tell you.
      </p>
    
      <p>
        When you take the time to pull a card, you are making a conscious decision to face your truths, correct your failings, 
        and pursue a higher goal.
      </p>
    </div>

  <contactBar/>
  </div>
</template>

<script>
  import tarotJourney from "../../assets/blogs/macpeters_tarotJourney.png";

  import navBar from '../../components/navBar.vue'
  import contactBar from '../../components/contactBar.vue'

  export default {
    name: "TarotAndPursuitOfBetter",
    components: { navBar, contactBar },
    data() {
      return {
        socialButtons: [
          {
            title: 'Email',
            url: 'mailto:peters.maryanne@gmail.com'
          }
        ],
        tarotJourney: tarotJourney
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
