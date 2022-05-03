<template>
  <div class="row" data-spy="scroll">
    <div
      class="collapse navbar col-sm-3"
      data-spy="affix"
      data-offset-top="200"
      style="
        display: block;
        background-image: url('./img/white.png');
        z-index: 4;
      "
    >
      <a id="active" class="chapter-list" href="./chapter-one">Chapter One</a>
      <ul class="nav littlemenu">
        <li>
          <a href="#sectionone">Overview of Hebrew Genealogies</a>
        </li>
        <li>
          <a href="#sectiontwo"
            >Condensing a Genealogical List—A Clear OT Example
          </a>
        </li>
        <li>
          <a href="#sectionthree">The Hidden Beauty of Hebrew Genealogies</a>
        </li>
        <li>
          <a href="#ConclusiontotheDebate">Conclusion to the 215/430 Debate</a>
        </li>
        <li>
          <a href="#Nature-of-the-Levi-Aaron-Abbreviation"
            >Nature of the Levi-Aaron Abbreviation</a
          >
        </li>
        <li>
          <a href="#Implications-for-Shems-Genealogy"
            >Implications for Shem's Genealogy</a
          >
        </li>
        <li>
          <a href="#Viewing-Shems-List-as-a-Chrono-Genealogy"
            >Viewing Shem's List as a Chrono-Genealogy</a
          >
        </li>
        <li>
          <a href="#The-Abbreviation-of-Shems-Genealogy-in-Retrospect"
            >The Abbreviation of Shem's Genealogy in Retrospect</a
          >
        </li>
      </ul>
      <a href="./chapter-two">Chapter Two</a>
      <h1></h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /><br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>

    <div class="main-text col-sm-8">
      <div v-html="chapterOneData"></div>
    </div>
  </div>
</template>

<script>
import chapterOne from "../chapters-html/chapter-one.js";

export default {
  data() {
    return { chapterOneData: chapterOne.html };
  },
};
</script>
   




