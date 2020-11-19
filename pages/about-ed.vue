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
                <h1 class="page-header-title">Hi, <br>I'm <span class="colored">Kyrian</span><br>Software Developer</h1>
                <a href="#" class="btn btn-primary btn-round btn-lg">Contact</a>
                <div class="profile-img">
                    <img v-lazy="'/img/kosh.png'" alt="picture of kyrian obikwelu">
                </div>
              </div>
        </div>
      </div>
    </div>
    <div class="section">
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
        <h3 class="title">Greetings!</h3>
        <p class="about-content">
            I’m Kyrian, a Nigerian-based web designer, web developer, graphics designer and founder of CodeWithKyrian — an educational media platform for learning about programming.

            I started out as a freelance programmer in 2018, working primarily through crowdsourcing sites like Upwork. Web develpment is my best-selling service, and it was the type of programming I enjoyed most, so I branded myself as a web developer. I have served up to 10 Clients and counting.

            In 2020 I launched CodeWithKyrian.com as an independent platform where I could offer my services , help others around me with what I'd learnt and build a business infrastructure of my own. I am promoting the site by creating content that brings in search traffic — primarily YouTube videos and written articles for programmers in PHP, JavaScript ,C# etc using technologies like Laravel, VueJs, Unity3d, etc.
        </p>
        <div class="container">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h4 class="title">My Skills</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit alias illo reiciendis itaque amet.</p>
          </div>
          <div class="clearfix"></div> 
          <div class="row">
            <div class="col-md-6">
                <div class="skills__data">
                            <div class="skills__names">
                                <i class="fab fa-html5 skills__icon"></i>
                                <span class="skills__names">HTML5</span>
                            </div>
                            <div>
                                <span class="skills__percentage">95%</span>
                            </div>
                            <div class="skills__bar skills__html"></div>
                </div>
                <div class="skills__data">
                            <div class="skills__names">
                                <i class="fab fa-css3-alt skills__icon"></i>
                                <span class="skills__names">CSS3</span>
                            </div>
                            <div>
                                <span class="skills__percentage">85%</span>
                            </div>
                            <div class="skills__bar skills__css"></div>
                </div>
                <div class="skills__data">
                            <div class="skills__names">
                                <i class="fab fa-js skills__icon"></i>
                                <span class="skills__names">JavaScript</span>
                            </div>
                            <div>
                                <span class="skills__percentage">65%</span>
                            </div>
                            <div class="skills__bar skills__js"></div>
                </div>
                <div class="skills__data">
                            <div class="skills__names">
                                <i class="fa fa-paint-brush skills__icon"></i>
                                <span class="skills__names">UI/UX</span>
                            </div>
                            <div>
                                <span class="skills__percentage">80%</span>
                            </div>
                            <div class="skills__bar skills__ux"></div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="skills__img">
                    <img src="/img/dev.svg" alt="develpor sitting with a laptop">
                </div>
                
            </div>
          </div>
            
        </div>
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto">
            <h4 class="title text-center">My Portfolio</h4>
          </div>
          <tabs
            pills
            class="nav-align-center"
            tab-content-classes="gallery"
            tab-nav-classes="nav-pills-just-icons"
            type="primary"
          >
            <tab-pane title="Profile">
              <i slot="label" class="now-ui-icons design_image"></i>

              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="img/bg6.jpg" class="img-raised" />
                    <img src="img/bg11.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/bg7.jpg" alt="" class="img-raised" />
                    <img src="img/bg8.jpg" alt="" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>

            <tab-pane title="Home">
              <i slot="label" class="now-ui-icons location_world"></i>

              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="img/bg1.jpg" alt="" class="img-raised" />
                    <img src="img/bg3.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/bg8.jpg" alt="" class="img-raised" />
                    <img src="img/bg7.jpg" alt="" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>

            <tab-pane title="Messages">
              <i slot="label" class="now-ui-icons sport_user-run"></i>

              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="img/bg3.jpg" alt="" class="img-raised" />
                    <img src="img/bg8.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/bg7.jpg" alt="" class="img-raised" />
                    <img src="img/bg6.jpg" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>
          </tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Tabs, TabPane } from '@/components';

export default {
  name: 'about',
   head: {
    title: 'About Kyrian Obikwelu',
    bodyAttrs: {
      class: "sidebar-collapse profile-page",
    }
  },
  components: {
    Tabs,
    TabPane
  }
};
</script>
<style lang="scss" scoped>
.page-header-title {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  .colored{
    color: orangered;
  }
}

.profile-img {
  position: absolute;
  top: 0;
  right: 0;
  width: 325px;
  @media screen and (min-width: 768px) {
      
  }
}
/* =============== SKILLS =============== */





@media screen and (min-width: 768px) {
  .skills__container {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    text-align: initial;
  }
}

@media screen and (min-width: 1024px) {
  .home__img {
    right: 10%;
  }
}
</style>

