<template>
  <div>
    <h1>Failing at Kickstarter</h1>
    <h2>How Lack of Momentum can Kill Your Project</h2>
    <h3>June 23, 2018</h3>
    <div class="post">
      <p>
        When I launched my <a href="https://www.kickstarter.com/projects/macpeters/hidden-dreams-tarot">Kickstarter campaign for the Hidden Dreams Tarot</a>,
        I thought that I had a good 20 people I knew who were interested, and that I'd be getting a review on a popular tarot site.
        I only needed 50 backers at $50 each - it seemed possible.  Unfortunately, the review never happened, and
        I had overestimated the interest I had from people I knew.
      </p>
      <img v-bind:src="kickstarterFailure" alt="Cancelled Kickstarter Campaign" title="Cancelled Kickstarter Campaign" />
      <h3>The First 3 Days are the Most Crucial</h3>
      <p>
        <a href="https://www.outerlimitgames.com/single-post/2016/11/12/Our-1st-Kickstarter-What-Went-Wrong" target="_blank">
          Other Campaigns will show
        </a>
        that Kickstarter Projects rely heavily on momentum -
        <a href="https://www.crowdcrux.com/these-seven-days-can-make-or-break-your-campaign-kicktraq-quick-tip/" target="_blank">
          if you don't get a ton of activity right away, your project will languish.
        </a>
        In fact, you <span class="emphasize">should be ready to see 50% of your goal met in the first 2 days</span>.  Why?
        <ul>
          <li>Getting <span class="emphasize">listed on the Kickstarter site</span> itself.  New projects with a lot of activity float to the top, so that
            those looking for projects to back can find the really popular ones, since algorithms assume that
            popular = what people want.
          </li>
          <li>Being a <span class="emphasize">'Staff Pick'</span> on the Kickstarter site can give you even better traffic - these are the projects
            that those who work at Kickstarter and see what works have decided is awesome.  You only really have a chance at this
            if your project looks like it'll be a success.
          </li>
          <li>Backer Psychology: user behaviour indicates that <span class="emphasize">low numbers can be enough to prevent someone
            from pledging</span> when they otherwise would have.  If you don't start seeing high numbers early on, future potential
            backers will see a failed project, and move on.
          </li>
        </ul>
        This essentially means that you need to have half your goal basically met before you ever launch your project,
        and you have to make certain that your backers are ready to pledge the moment you launch (or as close to that
        as possible).
      </p>

      <h3>What I did Wrong</h3>
      <ul>
        <li><span class="emphasize">I overestimated my real world backers.</span>  It turns out lots of people will say they are interested,
          because they want to be polite, or whatever.  Not everyone who shows interest will actually pledge.
        </li>
        <li><span>I failed to stress the importance of pledging right away.</span> The few real supporters I had kind of
          trickled in over the course of a week.  Only one of them even shared a link in the first few days.
          The impact of a pledge or share plummeted each day.
        </li>
        <li>Maybe my video must was terrible (lol) or my rewards weren't that great.  I had an ad up, and it brought in a fair bit of
          traffic, but no bites. At this point, I'm actually at a loss as to what exactly I did wrong on the actual campaign page,
          only know that people came, looked, and left.
        </li>
        <li>I wasn't as prepared as I thought I was to do the marketing.  I had a lot of pictures ready to
          share on social media, and stuff to write, and I had ideas for advertising (I figured I'd do a little
          bit of advertising, but probably wouldn't need a lot).  I'm not an advertiser, though, and I didn't
          look into that ahead of time.
          <a href="https://www.facebook.com/policies/ads/" target="_blank">
            <span class="emphasize">Facebook has very specific guidelines about ads</span>
          </a>
          that I didn't know about until the last minute - they don't like seeing text at all, and I had planned to use a
          fair amount of text.
        </li>
      </ul>
      <p>
        To be fair, I largely used the Kickstarter to find out how much interest there would be - if I had fallen
        just a little short of funding, I would have done the print run anyway, confident that people would be willing to
        spend money on decks.  As it is, I won't waste my money printing something I won't be able to sell.  Either the
        product isn't something people want, or I don't have any reach towards the people who would buy it.
      </p>
      <p>
        I definitely appreciate the experience of having done this - it forced me to get organized and really think about
        marketing and promotional material.  I think the scariest part of the whole thing was making that video -
        I am not at all comfortable performing, hearing my voice, or seeing myself on camera.  I practiced a lot,
        did a lot of takes, and edited other imagery in there to take the edge off a bit, but I was really eager
        to be done with it once I started shooting.
      </p>
      <p>
        Next time I or someone I know wants to run a crowdfunding campaign, I'll be far more prepared - and hopefully
        you will, too, after reading this :)
      </p>
    </div>
  </div>
</template>

<script>
  import kickstarterFailure from "../../assets/blogs/kickstarterFailure.png";

  export default {
    name: "photographingBlaclightArt",
    components: { },
    data() {
      return {
        kickstarterFailure: kickstarterFailure
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
    font-size: 1.1em;
  }
  img {
    padding-left: 20%;
  }
</style>
