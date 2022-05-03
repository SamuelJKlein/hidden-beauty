<template>
  <div id="read-page" class="row">
    <side-bar :chapterNumber="chapterNumber"></side-bar>
    <main-text
      :chapterHtml="currentChapter.html"
      :previousUrl="previousChapter"
      :nextUrl="nextChapter"
    ></main-text>
  </div>
</template>

<script>
import MainText from "../components/MainText.vue";
import SideBar from "../components/SideBar.vue";

import executiveSummary from "../chapters-html/executive-summary.js";
import foreword from "../chapters-html/foreword.js";
import chapterList from "../chapters-html/chapter-list.js";
import chapterOne from "../chapters-html/chapter-one.js";
import chapterTwo from "../chapters-html/chapter-two.js";
import chapterThree from "../chapters-html/chapter-three.js";
import chapterFour from "../chapters-html/chapter-four.js";
import chapterFive from "../chapters-html/chapter-five.js";
import chapterSix from "../chapters-html/chapter-six.js";
import chapterSeven from "../chapters-html/chapter-seven.js";
import chapterEight from "../chapters-html/chapter-eight.js";
import chapterNine from "../chapters-html/chapter-nine.js";
import chapterTen from "../chapters-html/chapter-ten.js";
import chapterEleven from "../chapters-html/chapter-eleven.js";
import chapterTwelve from "../chapters-html/chapter-twelve.js";
import chapterThirteen from "../chapters-html/chapter-thirteen.js";
import chapterFourteen from "../chapters-html/chapter-fourteen.js";
import chapterFifteen from "../chapters-html/chapter-fifteen.js";
import chapterSixteen from "../chapters-html/chapter-sixteen.js";
import chapterSeventeen from "../chapters-html/chapter-seventeen.js";
import chapterEighteen from "../chapters-html/chapter-eighteen.js";
import chapterNineteen from "../chapters-html/chapter-nineteen.js";
import appendix from "../chapters-html/appendix.js";

import notFound from "../chapters-html/not-found.js";

export default {
  components: { MainText, SideBar },
  data() {
    return {
      //   chapterOneData: chapterOne.html,
      // currentChapter: this.$route.params.chapterNumber,
      test: this.$route.params.chapterNumber,
      example: "Yay!",
      wrong: "",
    };
  },
  computed: {
    // currentSubheadings() {
    //   //get correct subheadings array based on route
    // },
    chapterNumber() {
      return this.$route.params.chapterNumber;
    },
    previousChapter() {
      const theApp = this;
      const findChap = function (v) {
        // console.log("here it is");
        // console.log(theApp.$route.params.chapterNumber);
        if (v.url === theApp.test) {
          return true;
        } else {
          return false;
        }
      };
      const currentChapterIndex = chapterList.findIndex(findChap);
      // const currentIndex = "g";
      if (currentChapterIndex > 0) {
        return chapterList[currentChapterIndex - 1].url;
      }
      return chapterList[0].url;
    },
    nextChapter() {
      const theApp = this;
      const findChap = function (v) {
        // console.log("here it is");
        // console.log(theApp.$route.params.chapterNumber);
        if (v.url === theApp.test) {
          return true;
        } else {
          return false;
        }
      };
      const currentChapterIndex = chapterList.findIndex(findChap);
      // const currentIndex = "g";
      if (currentChapterIndex < 20) {
        return chapterList[currentChapterIndex + 1].url;
      }
      return chapterList[0].url;
    },
    currentChapter() {
      // console.log("here it is1");
      // console.log(this.$route.params.chapterNumber);
      // const fourOhFour =
      //   "<h2 style='color:red;font-family:menlo'>/" +
      //   this.$route.params.chapterNumber +
      //   "</h2>" +
      //   notFound;

      switch (this.$route.params.chapterNumber) {
        case "executive-summary":
          return executiveSummary;

        case "foreword":
          return foreword;

        case "chapter-one":
          return chapterOne;

        case "chapter-two":
          return chapterTwo;

        case "chapter-three":
          return chapterThree;

        case "chapter-four":
          return chapterFour;

        case "chapter-five":
          return chapterFive;

        case "chapter-six":
          return chapterSix;

        case "chapter-seven":
          return chapterSeven;

        case "chapter-eight":
          return chapterEight;

        case "chapter-nine":
          return chapterNine;

        case "chapter-ten":
          return chapterTen;

        case "chapter-eleven":
          return chapterEleven;

        case "chapter-twelve":
          return chapterTwelve;

        case "chapter-thirteen":
          return chapterThirteen;

        case "chapter-fourteen":
          return chapterFourteen;

        case "chapter-fifteen":
          return chapterFifteen;

        case "chapter-sixteen":
          return chapterSixteen;

        case "chapter-seventeen":
          return chapterSeventeen;

        case "chapter-eighteen":
          return chapterEighteen;

        case "chapter-nineteen":
          return chapterNineteen;

        case "appendix":
          return appendix;

        default:
          console.log(this.$route.params.chapterNumber);
          console.log(notFound);

          return {
            html:
              "<h2 style='color:red;font-family:menlo'>/" +
              this.$route.params.chapterNumber +
              "</h2>" +
              notFound.html,
          };

        // (

        // );
      }
    },
  },
  watch: {},
};
</script>