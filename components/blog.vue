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
  import blacklightPhotography from "../assets/blogs/macpeters_blacklightPhotographs.png";
  import practiceDrawing from "../assets/blogs/macpeters_practiceDrawing.png";
  import tarotJourney from "../assets/blogs/macpeters_tarotJourney.png";
  import drawingChallenge from "../assets/blogs/macpeters_drawingChallenge.png";
  import tarotKickstarter from "../assets/blogs/kickstarterFailure.png";

  export default {
    name: "blog",
    components: { },
    data() {
      return {
        posts: [
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
            title: 'What I learned from a 30 Day Drawing Challenge',
            date: 'September 9, 2017',
            image: drawingChallenge,
            headline: 'How Challenges can help you grow as an Artist',
            link: '/blogPosts/whatIlearnedFromDrawingChallenge',
            tags: ['art', 'improvingAtArt']
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
  }
  .post-link {
    font-size: large;
    float: right;
    text-decoration: none;
  }
  img {
    width: 80%;
    padding: 5%;
    height: auto;
  }
  .date {
    float: left;
    font-size: small;
  }
</style>
