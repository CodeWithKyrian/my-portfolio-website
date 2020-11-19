<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('img/bg5.jpg')"
      >
      </parallax>
      <div class="container">
        <h1 class="title">{{slug}}</h1>
        <div class="date">
          28th September, 2020
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <h3 class="title">Introduction</h3>
        <div class="content">
            <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eaque, aperiam sapiente vero ducimus iusto totam officiis, nam modi at illum corporis alias voluptatibus dolorem eveniet. Doloribus nemo reiciendis ipsa sapiente dolorum quaerat omnis porro! Labore mollitia vel inventore excepturi in voluptatibus corporis qui dolores unde, expedita quisquam, provident ut magnam quos aliquid. Illo quos impedit commodi nam qui a amet fugiat provident eligendi minima iste voluptates, explicabo consectetur nisi distinctio mollitia. Soluta, hic? At animi commodi tenetur iste nemo quisquam tempora amet architecto, veniam culpa ad rem ratione omnis non harum saepe. Dolorem deleniti cum quod. Blanditiis, velit ipsum.
            </p>
            <img src="img/bg6.jpg" class="img-round" />
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eaque, aperiam sapiente vero ducimus iusto totam officiis, nam modi at illum corporis alias voluptatibus dolorem eveniet. Doloribus nemo reiciendis ipsa sapiente dolorum quaerat omnis porro! Labore mollitia vel inventore excepturi in voluptatibus corporis qui dolores unde, expedita quisquam, provident ut magnam quos aliquid. Illo quos impedit commodi nam qui a amet fugiat provident eligendi minima iste voluptates, explicabo consectetur nisi distinctio mollitia. Soluta, hic? At animi commodi tenetur iste nemo quisquam tempora amet architecto, veniam culpa ad rem ratione omnis non harum saepe. Dolorem deleniti cum quod. Blanditiis, velit ipsum.
            </p>
        </div>
        <div class="row comments">
          <div class="col-md-6 ml-auto mr-auto">
            <h4 class="title text-center">Comments</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    head: {
        bodyAttrs: {
            class: "sidebar-collapse slug-page",
        }
    },
    data(){
        return {
            slug: this.$route.params.slug
        }
    }
}
</script>

<style>

</style>