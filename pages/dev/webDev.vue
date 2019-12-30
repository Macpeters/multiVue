<template>
  <div>
    <h1>Macpeters: Web Development</h1>
    <breadcrumbs/>
    <h2>builder of websites, surveys, data visualizations</h2>
    <hr />
    <div class="page-description">
      <p>
        I work as a Professional Web Developer at
        <a href="https://www.infotech.com/">Infotech Research Group</a>, building surveys, reports,
        and data visualization dashboards for IT Research. I love collaborating, and working on a dev team is great 
        for that.
      </p>

      <p>
        This site is a static VueJS app, served on Netlify, using Nuxt.
      </p>
      
      <div class="resume-link">
        <h4><a href="https://macpeters-resume-dev.netlify.com/#skate-invasion" target="_blank">My Resume</a></h4>
        <div>An interactive React App, served on Netlify</div>
      </div>

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
  .page-description {
    text-align: left;
    margin: 10px;
  }

  ul {
    list-style: none;
  }

  p {
    padding: 5px;
  }

  .list {
    display: inline-block;
    padding: 3px;
  }

  .resume-link {
    padding: 10px;
    margin: 5px;
    border-color: grey;
    border-style: double;
  }

</style>