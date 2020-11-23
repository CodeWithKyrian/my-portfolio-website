<template>
  <div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="cover_img">
              <img v-lazy="blog.cover_img? blog.cover_img : '/img/1920dummy.png'" alt="" />
            </div> 
            <div class="title-block">
              <h1 class="title">{{blog.title}}</h1>
              <p class="date">{{blog.created_at}} <span> <nuxt-link to="/about">Kyrian</nuxt-link></span></p>
               
            </div>
            
            <div class="content">
                <p >
                {{blog.body}}
                </p>
            </div>
            <div class="row comments">
              <div class="col-md-6 ml-auto mr-auto">
                <h4 class="title text-center">Comments</h4>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <img src="/img/koshna.png" alt="">
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  watchQuery: ['page'],
    head: {
      bodyAttrs: {
        class: "sidebar-collapse slug-page",
    },
    htmlAttrs: {
      class: ""
    }
    },
    layout: "article",
    data(){
        return {
           blog : {}
        }
    },
    async fetch () {
      await this.$axios.get('/articles/' + this.$route.params.slug)
      .then((res) => {
        var result = res.data;
        this.blog = result.article;
      })
      .catch( err =>{
        if(err.response.status == 404){
          this.$nuxt.error({ statusCode: 404, message: 'Post not found' })
        }
      });
    }
}
</script>

<style>

</style>