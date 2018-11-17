<template>
  <div>
    <h1>The Fragility of the Web</h1>
    <h2>What are the Repercussions of Huge DDOS Attack?</h2>
    <h3>October 22, 2016</h3>
    <div class="post">
      <p>
        Today I managed to accomplish absolutely nothing at work.  Early in the day I was using Rollbar to
        track down a bug, and went I hit a link on that site, I found that the site was down. I went to Github
        and it was down.  I went to pull down the source code for a different project – git pull gave me an error.
        Was I sure I had access to the repository?  I tried again, periodically, hoping things would go back to normal.
        Eventually, the command worked.   Finally, the internet was back.  I got the source code, then typed npm install
        and watched the progress bar move…. until it stopped.  Npm was down, along with all the other sites, again.
        The developers slack channel at work started filling up with a list of other sites that were down.  Someone wrote:
        urbanDictionary is down, so basically I can’t get any work done.
        <span class="emphasize">I heard a voice at the other end of the room say that half the internet was down.</span>
      </p>

      <p>
        It was funny, I’ll admit.  Well, at first it was funny.  As the day wore on, the list of sites affected by the
        DDOS attack grew.  Imgur, Reddit, Netflix, PSN – these are entertainment sites.   I saw a t-shirt by teeSpring
        about surviving a few hours without Netflix and Reddit.    There was a tweet talking about how everyone freaking
        out over this was a #firstworldproblem .  And my immediate thought was to respond, but explaining why that was wrong
        seemed impossible in a tweet.  So I’m going to do it here.
      </p>

      <p>
        You’ll hear a lot in coming days about how much this attack cost us.  Web development across the nation pretty well gave up,
        costing countless hours in lost productivity.  Collaboration tools being unavailable would have greatly affected other
        industries as well.
        <span class="emphasize">Companies rely on IT, and IT couldn’t do their job.</span>
        There was a virtual news blackout as well, because the Boston Globe, New York Times, Daily News, Weather.com, Wired, Guardian.uk,
        and a bunch of other sites were down. Our peer communication forums like Reddit, Soundcloud and Twitter were down.
      </p>

      <span><img v-bind:src="ddos" alt="DDOS Attack" title="DDOS Attack" /></span>

      <p>
        Paypal and Kijiji, Shopify, EventBrite, Squarespace, and Freshbooks were down.  In 2009 it was reported that $2000 a second passed
        through Paypal.  A second!  And that data is 7 years out of date.
        <span class="emphasize">A huge chunk of our economy ground to a halt, because payments on millions of sites couldn’t happen.</span>
        Keep in mind the fact that Paypal is the often the only online payment option for anyone who doesn’t have good credit.
        People who have trouble getting around have come to rely on online ordering, having household goods delivered.  Mobile money
        transfers have been giving impoverished people in 3rd world nations the power of micro-payments to help them improve their own
        lives in ways that otherwise would be impossible.
      </p>

      <p>
        One day without these services in a first world nation, we can laugh about.  This attack did little more but disrupt my day,
        and I can laugh about having survived it.  I can’t deny, though, that this was a powerfully disruptive force, and as much damage
        as it caused, it could have caused a lot more.   What about
        <a href="http://www.securitynewspaper.com/2016/09/16/us-911-emergency-services-can-shut-ddos-attacks-mobile-botnets/">Emergency Services</a>,
        which are all to open to attacks of this nature?
        <span class="emphasize">Our system is fragile, and we have now seen how easy it is to cripple it.</span>
      </p>

      <p>
       I’m not the only one who is worried about what is possible tomorrow, if this was possible today.  Homeland Security and the FBI are
       investigating.  What was the motivation behind this?  Was it political?  Financial?  Is it Anonymous, or some group that just wants
       to watch the world burn?  Maybe the polarization of politics in the US right now inspired something that would give the current government
       the power to call a state of emergency and shut down this ridiculous election?  All we can do right now is speculate, but I’ll be paying attention.
      The world has changed – we can’t keep the wolves away by closing our doors and lighting a fire.  The wolves are virtual, and they’re already in our homes,
      in our pockets, in everything we do.  There will be far reaching repercussions, whatever form they take.
      </p>
    </div>

  </div>
</template>

<script>
  import ddos from "../../assets/blogs/ddos_resave.png";

  export default {
    name: "RepurcussionsOfDDOSAttack",
    components: { },
    data() {
      return {
        ddos: ddos
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
