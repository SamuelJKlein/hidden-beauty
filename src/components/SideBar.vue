<template>
  <div>
    <!-- Main website sidebar -->
    <div
      class="hg-main-menu navbar hg-navbar col-sm-3"
      data-spy="affix"
      data-offset-top="200"
      style="
        display: block;
        background-image: url('./img/white.png');
        z-index: 9999;
      "
    >
      <!-- This shows the list of chapters on the sidebar for the main site -->
      <div v-for="chapter in menuData" :key="chapter.url">
        <subheading-list
          :chapter="chapter"
          :subheadings="chapter.subheadings"
          :chapterNumber="chapterNumber"
          :url="chapter.url"
        ></subheading-list>
        <br />
      </div>
    </div>

    <!-- Overlay for when the mobile menu is open -->
    <div id="overlay" @click="handleOverlayClick" v-if="showNav"></div>

    <!-- Mobile Header  - doesn't belong here -->
    <div class="hg-mobile-menu" style="background-color: white">
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
          <!-- Title / show menu button for mobile -->
          <div
            class="navbar-header"
            style="
              border-bottom: solid teal 5px;
              background-color: white;
              height: 7rem;
            "
          >
            <a
              id="title-of-page"
              class="navbar-brand"
              style="color: black; background-color: white"
            >
              <a href="/" style="color: black">
                The Hidden Beauty of the Hebrew Genealogies</a
              >

              <i
                @click="toggleNav"
                class="fas fa-bars"
                style="margin-left: 2rem; float: right"
              ></i>
            </a>
          </div>

          <!-- Chapter | Current header for mobile -->
          <li @click="toggleMenu">
            {{ currentChapter.name }} | {{ currentHeading }}
          </li>

          <!-- show website navigation for mobile -->
          <div v-if="showNav" class="page-list nav navbar-nav">
            <div>
              <a href="/">Home</a>
            </div>
            <div><a href="/executive-summary">The Book</a></div>

            <!-- <div>
              <a href="https://everythingintheworldexists.blogspot.com/"
                >Blog</a
              >
            </div> -->
          </div>
        </div>
      </nav>
    </div>
    <div class="mobile-nav container-fluid">
      <div class="row">
        <!-- show list of chapters for mobile  -->
        <div v-if="showMenu" class="col-sm-12 nav navbar-nav">
          <li
            style="border-bottom: 1px solid rgb(230, 230, 230)"
            v-for="chapter in menuData"
            :key="chapter.url"
          >
            <a
              class=""
              :href="chapter.url"
              :class="{
                'chapter-active': currentChapter.url === chapter.url,
              }"
              >{{ chapter.name }}</a
            >
          </li>
        </div>
      </div>
    </div>
    <!-- Line break so the menu doesn't cover the text -->
    <div class="hg-mobile-menu">
      <h2>
        <br />
      </h2>
    </div>
  </div>
</template>

<script>
import SubheadingList from "./SubheadingList.vue";
import chapterList from "../chapters-html/chapter-list.js";
export default {
  props: ["chapterNumber"],
  components: { SubheadingList },
  data() {
    return {
      showNav: false,
      menuData: chapterList,
      currentHeading: "",
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let active = document.querySelector(".littlemenu .active");
      if (active) {
        this.currentHeading = active.innerText;
      }
    },
    handleOverlayClick() {
      this.showNav = false;

      this.$store.dispatch("hideMenuAction");
    },
    toggleMenu() {
      this.showNav = false;
      this.$store.dispatch("toggleMenuAction");
    },
    toggleNav() {
      this.showNav = !this.showNav;
    },
  },
  computed: {
    currentChapter() {
      for (var obj in this.menuData) {
        if (this.menuData[obj].url === this.chapterNumber) {
          return this.menuData[obj];
        }
      }
      return "";
    },
    showMenu() {
      return this.$store.state.showMenu;
    },
  },
  beforeMount() {
    for (var obj in this.menuData) {
      if (this.menuData[obj].url === this.chapterNumber) {
        this.menuData[obj].current = "true";
      } else {
        this.menuData[obj].current = "false";
      }
    }
    console.log("menuData:");
    console.log(this.menuData);
  },
};
</script>