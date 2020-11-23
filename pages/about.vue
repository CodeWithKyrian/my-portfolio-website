<template>
  <div>

    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('img/bg8.jpg')"
      >
      </parallax>
      <div class="container" style="text-align: left;">
          <div class="row">
              <div class="col-md-12">
                <h1 class="page-header-title">
                    <div>Hi, </div>
                    <div>I'm <span class="colored">Kyrian</span></div>
                    <vue-typed-js
                    :strings="['Software Developer', 'Software Programmer', 'Web Developer', 'Web Designer']"
                    :loop="true"
                    :typeSpeed="50"
                    :backSpeed="30"
                    :smartBackspace="true"
                    :cursorChar="'_'">
                        <div class="page-header-description">A <span class="typing"></span></div>
                    </vue-typed-js>
                </h1>
                <div class="profile-img"  style="z-index:5">
                    <img src="/img/koshna.png" alt="picture of kyrian obikwelu">
                </div>
                <a href="#contact-me" class="btn btn-primary btn-round btn-lg contact-btn" v-smooth-scroll>Contact</a>
              </div>
        </div>
      </div>
    </div>
    <div class="section" style="z-index:20;">
      <div class="container">
        <div class="button-container">
          <a
            href="#button"
            class="btn btn-primary btn-round btn-lg btn-icon"
            rel="tooltip"
            title="Follow me on Twitter"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="#button"
            class="btn btn-primary btn-round btn-lg btn-icon"
            rel="tooltip"
            title="Follow me on Instagram"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="#button"
            class="btn btn-primary btn-round btn-lg btn-icon"
            rel="tooltip"
            title="Follow me on Facebook"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            href="#button"
            class="btn btn-primary btn-round btn-lg btn-icon"
            rel="tooltip"
            title="Follow me on Github"
          >
            <i class="fab fa-github"></i>
          </a>
        </div>
        <div class="about-container">
          <h3 class="title">Greetings!</h3>
          <p class="about-content">
              Kyrian Obikwelu, a Nigerian-based web designer, web developer, graphics designer and founder of CodeWithKyrian — an educational media platform for learning about programming.

              I started out as a freelance programmer in 2018, working primarily through crowdsourcing sites like Upwork. Web develpment is my best-selling service, and it was the type of programming I enjoyed most, so I branded myself as a web developer. I have served up to 10 Clients and counting.

              In 2020 I launched CodeWithKyrian.com as an independent platform where I could offer my services , help others around me with what I'd learnt and build a business infrastructure of my own. I am promoting the site by creating content that brings in search traffic — primarily YouTube videos and written articles for programmers in PHP, JavaScript ,C# etc using technologies like Laravel, VueJs, Unity3d, etc.
          </p>
        </div>
        <skills></skills>
        <!-- PORFOLIO -->
        <contact-us id="contact-me"></contact-us>
      </div>
    </div>
  </div>
</template>
<script>
import { Tabs, TabPane, Skills, ContactUs } from '@/components';
import Vue from 'vue'
import { VueTypedJs } from 'vue-typed-js'


Vue.use(VueTypedJs)
export default {
  name: 'about',
   head: {
    title: 'About Kyrian Obikwelu',
    bodyAttrs: {
      class: "sidebar-collapse profile-page",
    },
    htmlAttrs: {
      class: ""
    }
  },
  components: {
    Tabs,
    TabPane,
    Skills,
    ContactUs,
    VueTypedJs,
    ContactUs,
    Skills
  }
};
</script>
<style lang="scss" scoped>
.contact-btn,.page-header-title{
    position: relative;
    z-index: 10;
}
.profile-img {
  position: absolute;
  top: 0;
  right: 0;
  width: 325px;
}

</style>

