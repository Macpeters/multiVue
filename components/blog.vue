<template>
  <div class="blog-list">

    <span v-for="post in posts" :key='post.id' class="blog-post">
      <a v-bind:href="post.link"><span>
        <div class="left-column">
          <img v-bind:src="post.image" v-bind:alt="post.title" v-bind:title="post.title" />
          <span class="date">{{post.date}}</span>
        </div>
        <div class="right-column">
          <h3>{{post.title}}</h3>
          <h4>{{post.headline}}</h4>
          <a v-bind:href="post.link" class="post-link">Read More</a>
        </div>
      </span></a>
      <br />
    </span>

  </div>
</template>

<script>
  import activeRecord           from "../assets/blogs/thumbnails/macpeters_activeRecord.png";
  import blacklightPhotography  from "../assets/blogs/thumbnails/macpeters_blacklightPhotographs.png";
  import cosmicKitten           from "../assets/fineArt/thumbnails/macpeters_cosmicKitten.png";
  import ddos                   from "../assets/blogs/thumbnails/macpeters_ddos.png";
  import drawingChallenge       from "../assets/blogs/thumbnails/macpeters_drawingChallenge.png";
  import eagerness              from "../assets/fineArt/thumbnails/macpeters_eagerness.png";
  import facebookTheEnemy       from "../assets/blogs/thumbnails/macpeters_facebookTheEnemy.png";
  import hockeyBeesProgress     from "../assets/blogs/thumbnails/macpeters_hockeyBeesProgress.png";
  import neonJungle             from "../assets/blogs/thumbnails/macpeters_neonJungle.jpg";
  import practiceDrawing        from "../assets/blogs/thumbnails/macpeters_practiceDrawing.png";
  import robin                  from "../assets/blogs/thumbnails/macpeters_robinRedBreast.png";
  import tarotJourney           from "../assets/blogs/thumbnails/macpeters_tarotJourney.png";
  import tarotKickstarter       from "../assets/blogs/thumbnails/macpeters_kickstarterFailure.png";
  import teePublic              from "../assets/blogs/thumbnails/macpeters_teepublic.png";

  export default {
    name: 'Blog',
    components: { },
    data() {
      return {
        posts: [
          {
            title: 'A Look Back - 2019',
            date: 'Dec 29, 2019',
            image: robin,
            headline: 'A recap of Art in 2019',
            link: '/blogPosts/aLookBack2019',
            tags: ['art', 'cartoons', 'visionary art', 'improvingAtArt']
          },
          {
            title: 'TeePublic',
            date: 'May 19, 2019',
            image: teePublic,
            headline: 'A Review',
            link: '/blogPosts/teePublic',
            tags: ['art', 'cartoons']
          },
          {
            title: 'A Look Back - 2018',
            date: 'Dec 31, 2018',
            image: cosmicKitten,
            headline: 'A recap of Art in 2018',
            link: '/blogPosts/aLookBack2018',
            tags: ['art', 'tarot', 'visionary art', 'improvingAtArt']
          },
          {
            title: 'Rails Active Record Queries',
            date: 'Dec 14, 2018',
            image: activeRecord,
            headline: 'A Cheatsheet',
            link: '/blogPosts/activeRecordQueries',
            tags: ['dev', 'rails', 'technology', 'webdev']
          },
          {
            title: 'The Process Behind the Hockey Bees Mural',
            date: 'July 6, 2018',
            image: hockeyBeesProgress,
            headline: 'From Inception to Completion: My Mural Process',
            link: '/blogPosts/processOfAMural',
            tags: ['art', 'streetart']
          },
          {
            title: 'Is Facebook Really the enemy?',
            date: 'April 5, 2018',
            image: facebookTheEnemy,
            headline: 'Privacy - the cost of being online',
            link: '/blogPosts/isFacebookTheEnemy',
            tags: ['technology', 'data']
          },
          {
            title: 'Failing at Kickstarter',
            date: 'April 5, 2018',
            image: tarotKickstarter,
            headline: 'How Lack of Momentum can Kill Your Project',
            link: '/blogPosts/howToFailAtKickstarter',
            tags: ['kickstarter', 'tarot']
          },
          {
            title: 'Tarot and the Pursuit of Better',
            date: 'April 5, 2018',
            image: tarotJourney,
            headline: 'How Tarot can represent a conscious decision to pursue a higher goal',
            link: '/blogPosts/tarotAndPursuitOfBetter',
            tags: ['art', 'visionary art', 'tarot']
          },
          {
            title: 'A Look Back - 2017',
            date: 'Dec 31, 2017',
            image: eagerness,
            headline: 'A recap of Art in 2017',
            link: '/blogPosts/aLookBack2017',
            tags: ['art', 'visionary art', 'improvingAtArt']
          },
          {
            title: 'The Fragility of the Web',
            date: 'October 22, 2017',
            image: ddos,
            headline: 'What are the Repercussions of Huge DDOS Attack?',
            link: '/blogPosts/repurcussionsOfDDOSAttack',
            tags: ['technology', 'web security', 'privacy', 'webdev']
          },
          {
            title: 'What I learned from a 30 Day Drawing Challenge',
            date: 'September 9, 2017',
            image: drawingChallenge,
            headline: 'How Challenges can help you grow as an Artist',
            link: '/blogPosts/whatIlearnedFromDrawingChallenge',
            tags: ['art', 'improvingAtArt', 'cartoons']
          },
          {
            title: '4 Tips for Photographing Blacklight Art',
            date: 'August 17, 2017',
            image: blacklightPhotography,
            headline: 'Tips for Sharp Low-light photography',
            link: '/blogPosts/photographingBlacklightArt',
            tags: ['art', 'photography', 'blacklight', 'visionary art']
          },
          {
            title: '10 Ways to Practice Drawing In Order to Improve Quickly',
            date: 'August 17, 2017',
            image: practiceDrawing,
            headline: 'Get the most from your practice in the shortest possible time',
            link: '/blogPosts/howToPracticeDrawing',
            tags: ['art', 'improvingAtArt']
          },
          {
            title: 'A Look Back - 2016',
            date: 'Dec 31, 2016',
            image: neonJungle,
            headline: 'A recap of Art in 2016',
            link: '/blogPosts/aLookBack2016',
            tags: ['art', 'streetart', 'improvingAtArt']
          }
        ],
        chosenPost: {},
        filter: null
      };
    },
    methods: {
    choose(post) {
      this.chosenPost = post;
    }
  },
  beforeMount(){
    const filter = this.$parent.blogFilter
    // filter blog posts by tag
    if(filter !== null){
      this.posts = this.posts.filter(function (post) {
        return post.tags.indexOf(filter) > -1;
      }).slice(0, 2)
    }
    this.choose(this.posts[0])
  }
};
</script>


<style scoped>
  .blog-list {
    margin-top: 10px;
    display: block;
    clear: both;
  }
  .left-column {
    float: left;
    width: 30%;
  }
  .right-column {
    float: right;
    width: 70%
  }
  .blog-post {
    width: 45%;
    padding: 3px;
    margin: 2px;
    clear: both;
    display: inline-block;
    border: 2px solid #ddd;
    height: 200px;
    position: relative;
  }
  .post-link {
    font-size: large;
    right: 5px;
    bottom: 0;
    position: absolute;
    text-decoration: none;
  }
  img {
    width: 80%;
    padding: 5%;
    height: auto;
  }
  .date {
    left: 10px;
    font-size: small;
  }
  h4 {
    font-size: 14px;
  }
  @media screen and (max-width: 520px){
    .blog-post {
      width: 100%;
    }
    .date {
      display: block;
    }
  }
</style>
