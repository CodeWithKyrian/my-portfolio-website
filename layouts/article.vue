<template>
<div class="app">
    <my-navbar :colorOnScroll="0" :transparent="false"></my-navbar>
    <div class="wrapper">
        <nuxt keep-alive/>
    </div>
    <main-footer backgroundColor="black"></main-footer>
</div>
    
</template>

<script>
import MyNavbar from '@/components/Layout/MyNavbar';
import MainFooter from '@/components/Layout/MainFooter';
export default {
    components: {
        MyNavbar,
        MainFooter
    }
}
</script>

<style>

</style>