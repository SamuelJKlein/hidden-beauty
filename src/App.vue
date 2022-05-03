<template>
  <link rel="stylesheet" :href="styleRef" />
  <the-header></the-header>
  <!-- <div v-if="showMobileMenu" class="">
    <i class="fas fa-bars"></i>
    <div
      id="chapterList"
      style="
        background-color: white;
        padding-left: 15px;
        font-size: 2.5rem;
        z-index: 9999 !important;
      "
    >
      <a class="chapter-list" href="/chapter-one">Chapter One</a>
      <br />
      <a href="/chapter-two">Chapter Two</a>
      <br />
      <a href="/chapter-three">Chapter Three</a>
      <br />
      <a href="/chapter-four">Chapter Four</a>
      <br />
      <a href="/chapter-five">Chapter Five</a>
    </div>
  </div> -->

  <router-view />
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  components: { TheHeader },
  data() {
    return {
      currentStyle: false,
    };
  },
  methods: {
    toggleStyle() {
      this.currentStyle = !this.currentStyle;
    },
  },
  computed: {
    showMobileMenu() {
      var mobileSite = window.matchMedia("(max-width:780px)");
      if (mobileSite.matches) {
        return true;
      }
      return false;
    },
    styleRef() {
      if (this.currentStyle === true) {
        return "./science.css";
      } else {
        return "";
      }
    },
  },
};
</script>
