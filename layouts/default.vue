<template>
<div class="app">
    <my-navbar :colorOnScroll="400"></my-navbar>
    <div class="wrapper">
        <nuxt/>
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