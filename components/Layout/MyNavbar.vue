<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link class="navbar-brand" to="/">
        CodeWithKyrian
      </router-link>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
            <router-link class="nav-link" to="/">
                <i class="now-ui-icons business_bank"></i>
                <p>Home</p>
            </router-link>
      </li>
      <li class="nav-item">
            <router-link class="nav-link" to="/about">
                <i class="now-ui-icons users_circle-08"></i>
                <p>About Me</p>
            </router-link>
      </li>
      <drop-down
        tag="li"
        title="Articles"
        icon="now-ui-icons design_app"
        class="nav-item"
      >
        <nav-link to="/articles">
          <i class="now-ui-icons business_chart-pie-36"></i> All Articles
        </nav-link>
        <nav-link to="/articles">
          <i class="now-ui-icons ui-1_settings-gear-63"></i> JavaScript
        </nav-link>
      </drop-down>
      <li class="nav-item">
            <router-link class="nav-link" to="/courses">
                <p>Courses</p>
            </router-link>
      </li>
      <li class="nav-item">
            <router-link class="nav-link btn btn-neutral" to="/login">
                <p>Login</p>
            </router-link>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavLink
  }
};
</script>

<style scoped></style>
