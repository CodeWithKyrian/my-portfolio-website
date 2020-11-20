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
                                <router-link to="/sjakajs">
                                    <img v-lazy="blog.cover_img" alt="" />
                                </router-link>                        
                            </div>
                            <template slot="default">
                                <router-link to="/sjakajs">
                                    <h4 class="card-title">{{ blog.title}}</h4>
                                </router-link>
                                <p class="card-text">{{blog.content}}...</p>
                                <router-link to="/sjakajs" class="btn btn-primary pull-right">Read more</router-link>
                            </template>
                        </card>
                    </div>
                  </div>
                  <n-pagination
                    type="primary"
                    :page-count="10"
                    v-model="pagination.current"
                  >
                  </n-pagination>
              </div>
              <div class="col-md-3">
                  <h3>TAGS LIST</h3>
              </div>
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
import { Card, Pagination } from '@/components';
export default {
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
            blogs: [
                {
                    id: 1,
                    title: "How to make a great toast for your sick boss",
                    cover_img: "/img/thumbnail2.png",
                    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nam minus? Velit dolor enim facilis!"
                },
                {
                    id: 2,
                    title: "Reading the palace of the prince of Cantebury",
                     cover_img: "/img/thumbnail1.png",
                    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nam minus? Velit dolor enim facilis!"
                },{
                    id: 3,
                    title: "JavaScript functions and their ripple mentalities",
                     cover_img: "/img/thumbnail4.png",
                    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nam minus? Velit dolor enim facilis!"
                },{
                    id: 4,
                    title: "How to make a great toast for your sick boss",
                     cover_img: "/img/thumbnail3.png",
                    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nam minus? Velit dolor enim facilis!"
                },{
                    id: 5,
                    title: "Bringing your A game to the table of chess and wide",
                     cover_img: "/img/thumbnail2.png",
                    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nam minus? Velit dolor enim facilis!"
                }
            ],
            pagination: {
                simple: 1,
                current: 1,
                full: 3
            }
        }
    }
}
</script>

<style>

</style>