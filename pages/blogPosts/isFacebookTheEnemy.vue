<template>
  <div>
    <navBar />

    <h1>Is Facebook Really the Enemy?</h1>
    <h2>Privacy - the cost of being online</h2>
    <h3>April 7, 2018</h3>
    <div class="post">
      <p>
        I have often heard the argument that 
        <span class="emphasize">if you’re not paying for a service, you are the product.</span>  
        I’ve used that argument myself.  Recently, though, 
        <a href="https://twitter.com/ChrisDeLeon">@ChrisDeLeon</a> 
        shared a thread by 
        <a href="https://twitter.com/doctorow">@doctorow</a> 
        on 
        Twitter which made a lot of sense.  Even when you are paying for a service, you are often a commodity, 
        and that’s not anything new. People pay more than $100/month for cable tv – half of which is advertising. 
        Magazines, last I checked, were around $10 a piece – 70% pure ads, and most of the content is more ads, 
        disguised as articles. Ads are forced on you during flights, movies in a theatre, in any amusement park. 
        <span class="emphasize">Even after paying to access all of these things, you are still very much being monitored and sold.</span>
      </p>

      <p>
        Everywhere you are being tracked, as well.  Almost all websites have analytics – 
        <span class="emphasize">so any website owner can see the demographics and behaviours of every visitor</span> 
        – their physical location, age, what led to the site, where they spent 
        their time, where the curser was sitting on the screen, when it wasn’t clicking anything (heatmaps).  Google Analytics 
        is free, and commonly used, but there are other options.  Whatever service the site owner uses for analytics, that 
        service has your information, as well as the site owner.  
        <span class="emphasize">On any site with share buttons, you are being tracked by the various social platforms.</span>  
        You just click a button, and Pinterest shows you a list of the images on the page, and you 
        can choose where you want to pin them.  It’s so easy!  Of course, in order for it to be easy, you are signed in to 
        Pinterest, and they are aware of what you are looking at.
      </p>

      <p>
        Does your phone have location data on?  It sure makes the map more useful.  I can look at Google to see all 
        the places I’ve been, how long I was there, often how I got there.  Even with location turned off, though, 
        your old-timey 
        <span class="emphasize">brick and mortar shops have the ability to track you by your phone </span> 
        – following you around 
        the store, and keeping track of how often you return.  That tracking is then sold to us as a feature.  
        You can have your phone notify you of nearby sales as you walk around the grocery store.  Now grocery shopping 
        is a game – try to save the most money by following prompts on your phone.
      </p>

      <p>
        Do you have a points card, credit or debit card?  Your purchases are all tracked.  It’s easy to develop a psychographical 
        profile on you based on your purchases.  As you walk around the city, look around to see how many cameras there are.  
        Cameras with analytic technology can draw attention to unusual behaviour within a crowd (walking faster or slower or 
        against the general flow of traffic).  They can then use facial recognition technology to find out who is behaving 
        abnormally.
      </p>
      <p><span class="emphasize">Is any of this actually a problem, though?</span></p>
      <p>
        In short, yes, it can be.  But it’s happening anyways.  There is a momentum that can’t really be stopped at this point.  
        We want the convenience.  We want the world tailored to us.  I don’t mind seeing ads for something I’m looking to buy, 
        and not having to see as many ads for stuff I’ll never buy.   How the technology and data is being used right now doesn’t 
        seem that terrible.  Sure, if you commit a crime, they can grab all your data off facebook.  But most of us don’t have to worry, right?
      </p>
      <p>
        The problem is how this data could be used against us.  In China, there is a point system in place to rate citizens.  These ratings 
        can be used to control whether you can access certain housing, employment, schooling, and more.   If someone has a low rating, 
        for whatever reason, it can be incredibly difficult to earn a higher rating, because they simply don’t have access to the right 
        opportunities.  More than that, though: if there is no privacy at all, it is far too easy to exert absolute control over a population.   
        It’s terrifying to imagine anyone with that kind of power.  As humans, we have a long history of abusing power.
      </p>

      <p>
        The data that is collected about us is already used to filter what we see on the internet – on social platforms and in web searches.   
        Imagine people who like superheroes are no longer shown any political content that doesn’t agree with the current regime.  We get 
        filtered into little boxes, 
        <span class="emphasize">where our knowledge of the world is limited to what someone else decided we should see.</span>
      </p>

      <p><span class="emphasize">So.. Delete Facebook?</span></p>

      <p>
        Well, probably most of us won’t.  I know a number of entertainers are pulling out – because Facebook is no longer a way to make money.  
        Your page posts will only be seen by a tiny fraction of the people who follow it.  Your personal posts are the same way – and you are 
        likely only seeing posts by a small percentage of your friends.   Maybe Facebook is still okay for chatting, and planning events.  I 
        personally lost interest in looking at the feed pretty quickly these days.  I’ve got my filters set to show me only stuff I want to see, 
        and that’s great.
      </p>

      <p>
        <span class="emphasize">So I will probably just spend less time on Facebook – the internet is a big place, after all.</span>
      </p>
    </div>

  <contactBar/>
  </div>
</template>

<script>
  import practiceDrawing from "../../assets/blogs/macpeters_practiceDrawing.png";

  import navBar from '../../components/navBar.vue'
  import contactBar from '../../components/contactBar.vue'

  export default {
    name: "NewPost",
    components: { navBar, contactBar },
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
    font-size: 1.1em;
    font-weight: bold;
  }
  img {
    padding-left: 20%;
  }
</style>
