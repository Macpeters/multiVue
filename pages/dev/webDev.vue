<template>
  <div>
    <h1>Macpeters: Web Development</h1>
    <breadcrumbs/>
    <h2>builder of websites, surveys, data visualizations</h2>
    <hr />
    <div class="page-description">
      <p>
        I work as a Professional Web Developerat
        <a href="https://www.infotech.com/">Infotech Research Group</a>, building surveys, reports,
        and data visualization dashboards for IT Research.  I work in a number of different systems,
        some legacy, and many of them interact.
        I love collaborating, and working on a dev team is great for that.
        We have recently chosen Vue.js as a framework since our content is becoming more dynamic.
      </p>
      <p><h4><a href="/devResume">See my Resume</a></h4></p>
      <p>
        My own site is a multipage vue app, served on Netlify, using npm and nuxt.
        I've rebuilt it more times than I can count, trying out new technology, looking for a UX
        that is compelling, and intuitive.
      </p>
    </div>

    <div>
      <h3>Open Source Projects</h3>
      <ul>
        <li>
          <div class="list title"><a href="https://codepen.io/Macpeters/">Codepen</a></div>
          <div class="list description">Used for testing out ideas, trying new technologies</div>
        </li>
        <li>
          <div class="list title"><a href="https://github.com/macpeters">Github</a></div>
          <div class="list description">All my codes that don't belong to a company</div>
        </li>
      </ul>
    </div>

    <div>
      <h3>Community Involvement</h3>
      <ul>
        <li>
          <div class="list title"><a href="https://www.meetup.com/HackerNest/">Hackernest</a></div>
          <div class="list description">Monthly Tech Social</div>
        </li>
        <li>
          <div class="list title"><a href="https://stackoverflow.com/users/2111713/macpeters">Stack Overflow</a></div>
          <div class="list description">Questions and answers.</div>
        </li>
      </ul>
    </div>

    <blogList/>
  </div>

</template>

<script>
  // Images
  import logoImage    from "../../assets/logo.png";
  import github       from "../../assets/social/github.png";
  // Components
  import breadcrumbs  from '../../components/breadcrumbs.vue'
  // Blog
  import blogList     from '../../components/blog.vue'

  export default {
  name: "Dev",
  components: { breadcrumbs, blogList },
  data() {
    return {
      githubImage: github,
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/webDev', name: 'Web Development' }
      ],
      blogFilter: 'technology',
    };
  },
  head () {
    return {
      title: "Macpeters - Web Development",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'devDescription', name: 'description', content: 'Web Development using ruby on rails, vue, javascript'},
        { hid: 'devAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Macpeters - Web Development' },
        { hid: `og:url`, property: 'og:url', content: 'https://macpeters-vue.netlify.com/webDev/' },
        { hid: `og:description`, property: 'og:description', content: 'Web Development using ruby on rails, vue, javascript' },
        { hid: `og:type`, property: 'og:type', content: 'website' },
        { hid: `og:image`, property: 'og:image', content: logoImage }
      ]
    }
  }
};
</script>


<style scoped>
  ul {
    list-style: none;
  }

  .list {
    display: inline-block;
    padding: 3px;
  }

</style>