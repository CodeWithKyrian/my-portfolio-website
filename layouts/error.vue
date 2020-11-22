<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('img/header.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">
          <img class="n-logo" src="img/now-logo.png" alt="" />
          <h1 v-if="error.statusCode === 404">Page not found</h1>
          <h3>Go back to <nuxt-link to="/">Home page</nuxt-link></h3>
          <nuxt-link to="/articles" class="btn btn-primary btn-round contact-btn">Recent Articles</nuxt-link>
        </div>
        <h6 class="category category-absolute">
            
        </h6>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  props: ['error'],
  layout: 'default',
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
      bodyAttrs: {
        class: "sidebar-collapse index-page",
      }
    }
  }
}
</script>