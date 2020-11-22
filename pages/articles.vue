<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('img/code-sss.png')"
      >
      </parallax>
      <div class="container">
        <h1 class="title">Dev Blog</h1>
        <div class="date">
          <h4>Articles about Programming, Designing and More!</h4>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
          <div class="row">
              <div class="col-md-9">
                  <h3>LATEST ARTICLES</h3>
                  <div class="row">
                    <div class="col-lg-6 col-sm-6" v-for="blog in blogs" :key="blog.id">
                        <card type="blog" plain>
                            <div slot="header" class="img-container">
                                <router-link :to="'/' + blog.slug">
                                    <img v-lazy="blog.cover_img? blog.cover_img : '/img/1920dummy.png'" alt="" />
                                </router-link>                        
                            </div>
                            <template slot="default">
                                <router-link :to="'/' + blog.slug">
                                    <h4 class="card-title">{{ blog.title}}</h4>
                                </router-link>
                                <p class="card-text">{{blog.preview}}...</p>
                                <router-link :to="'/' + blog.slug" class="btn btn-primary pull-right">Read more</router-link>
                            </template>
                        </card>
                    </div>
                  </div>
                  <n-pagination
                    type="primary"
                    :page-count="pagination.page_count"
                    v-model="pagination.current_page"
                    @changePage="changePage"
                  >
                  </n-pagination>
              </div>
              <div class="col-md-3">
                  <h3>TAGS LIST</h3>
              </div>
          </div>           
        <div class="row comments">
          <div class="col-md-6 ml-auto mr-auto">
            <h4 class="title text-center">Another</h4>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import { Card, Pagination } from '@/components';
export default {
  watchQuery: ['page'],
    head: {
        title: "Dev Blog",
        bodyAttrs: {
            class: "sidebar-collapse articles-page",
        }
    },
    components: {
        Card,
        [Pagination.name]: Pagination,
    },
    data(){
        return {
            blogs: [],
            pagination: {
                current_page: 0,
                page_count: 0
            }
        }
    },
    watch: {
        '$route.query': '$fetch'
    },
    async fetch () {
      var params = {
        page: this.$route.query.page ? this.$route.query.page : 1,
        }

      let res = await this.$axios.get('/articles', {params});
      var result = res.data;
      this.blogs = result.articles;
      this.pagination.current_page = result.meta.current_page
      this.pagination.page_count = result.meta.last_page
    },
    methods : {
      changePage(page){
        this.$router.push({
          path: "/articles",
           query: {page}
        });
      }
    }
  }
</script>

<style>

</style>