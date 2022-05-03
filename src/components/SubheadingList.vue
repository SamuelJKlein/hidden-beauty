<template>
  <a
    :style="chapter.styles"
    class=""
    :href="'/' + url"
    :class="current ? 'chapter-active' : ''"
    >{{ chapter.name }}</a
  >
  <sup><br /></sup>
  <!-- this is where the list of subheadings is shown if the chapter is currently open-->
  <!-- <ul class="nav littlemenu" v-if="current">
    <li v-for="subheading in subheadings" :key="subheading.url">
      <a :href="'#' + subheading.url" :style="subheading.styles">{{
        subheading.name
      }}</a>
    </li>
  </ul> -->
</template>
<script>
export default {
  props: ["chapterNumber", "url", "subheadings", "chapter"],
  computed: {
    current() {
      // this checks if the chapter in this instance is currently open
      // if it is it will show the subheading list
      if (this.chapterNumber === this.url) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>