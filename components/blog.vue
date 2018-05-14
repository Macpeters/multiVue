<template>
  <div>

  <div>
    <div v-for="post in posts" :key='post.id' class="blog-post">
      <div class="left-column"></div>
      <div class="right-column">
        <h3>{{post.title}}</h3>
        <h4>{{post.headline}}</h4>
        <a v-bind:href="post.link">Read More</a>
      </div>
      <br />
    </div> 
  </div>

  </div>
</template>

<script>
  // Images
  import email from "../assets/social/email.png";


  export default {
    name: "blog",
    components: { },
    data() {
      return {
        posts: [
          {
            title: 'Tarot and the Pursuit of Better',
            date: 'April 5, 2018',
            image: email,
            headline: 'How Tarot can represent a conscious decision to pursue a higher goal',
            link: '/blogPosts/tarotAndPursuitOfBetter',
            tags: ['art']
          },
          {
            title: 'What I learned from a 30 Day Drawing Challenge',
            date: 'September 9, 2017',
            image: email,
            headline: 'How Challenges can help you grow as an Artist',
            link: '/blogPosts/whatIlearnedFromDrawingChallenge',
            tags: ['art', 'improvingAtArt']
          },
          {
            title: '4 Tips for Photographing Blacklight Art',
            date: 'August 17, 2017',
            image: email,
            headline: 'Tips for Sharp Low-light photography',
            link: '/blogPosts/photographingBlacklightArt',
            tags: ['art', 'photography', 'blacklight']
          },
          {
            title: '10 Ways to Practice Drawing In Order to Improve Quickly',
            date: 'August 17, 2017',
            image: email,
            headline: 'Tips for Sharp Low-light photography',
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
      })
    }
    this.choose(this.posts[0])
  }
};
</script>


<style scoped>
  .left-column {
    float: left;
    width: 20%px;
  }
  .right-column {
    float: right;
    width: 80%
  }
  .blog-post {
    padding: 20px;
  }
  a {
    float: right;
    text-decoration: none;
  }
</style>
