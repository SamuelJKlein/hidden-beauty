<template>
  <div id="overlay" @click="toggleNav" v-if="showNav"></div>
  <!-- <h3>Header</h3> -->
  <div class="hg-mobile-menu" style="background-color: teal">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <!-- Overlay for when the mobile menu is open -->

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

        <!-- show website navigation for mobile -->
        <div v-if="showNav" class="page-list nav navbar-nav">
          <div>
            <a href="/">Home</a>
          </div>
          <div><a href="/executive-summary">The Book</a></div>

          <div>
            <a href="https://everythingintheworldexists.blogspot.com/">Blog</a>
          </div>
        </div>

        <!-- <div v-if="0 !== 0" class="nav navbar-nav">
          <li class="">
            <a class="chapter-list" href="/chapter-one">Chapter One</a>
          </li>
          <li><a href="/chapter-two">Chapter Two</a></li>
          <li><a href="/chapter-three">Chapter Three</a></li>
          <li><a href="/chapter-four">Chapter Four</a></li>
          <li><a href="/chapter-five">Chapter Five</a></li>
        </div> -->
      </div>
    </nav>
  </div>
  <!-- Line break so the menu doesn't cover the text -->
  <div class="hg-mobile-menu">
    <h2>
      <br />
    </h2>
  </div>

  <p>
    <b
      >Hidden Beauty offers to the Body of Christ a promising solution to a
      nagging and contentious Bible problem that has escaped explanation for two
      thousand years. The problem has to do with whether Shem's genealogy in
      Genesis 11 is complete or not, and if not, where and how many names are
      omitted. Historically, the Church has interpreted it as complete, but this
      view conflicts with numerous other Scriptures. Further, recent discoveries
      of huge numbers of cuneiform tablets testify to an earlier Flood date than
      is found by adding the numbers in Shem's genealogy. We propose that Shem's
      list has been shortened from 45-65 names to ten which means the Flood of
      Noah occurred nearer 4000 BC than 2500 BC. This solution eliminates the
      many biblical conflicts, confirms recent cuneiform finds and comes with a
      book full of biblical support.</b
    >
  </p>

  <a
    href="/The-Hidden-Beauty-of-the-Hebrew-Genealogies.pdf"
    target="_blank"
    download="The-Hidden-Beauty-of-the-Hebrew-Genealogies"
    ><button
      class="btn btn-primary"
      style="font-size: 2rem; color: teal; background-color: white"
    >
      Download PDF

      <span class="glyphicon glyphicon-download"></span>
    </button>
  </a>
  <a href="/executive-summary"
    ><button
      class="btn btn-primary"
      style="
        font-size: 2rem;
        color: teal;
        background-color: white;
        margin-left: 10px;
      "
    >
      Read Here
      <span class="glyphicon glyphicon-book"></span>
    </button>
  </a>

  <p style="font-size: 1.3rem">
    The Hidden Beauty of Hebrew Genealogies: Harmonizing Old Testament Words and
    Numbers, Fifth Edition, 12/2021. Frequent updates. Copyright © 2016, © 2017,
    © 2018, © 2019, © 2020, © 2021, by Lloyd Tontz Anderson All rights reserved.
  </p>
  <p style="font-size: 1.3rem">
    Unless otherwise indicated, all Scripture quotations are from The ESV® Bible
    (The Holy Bible, English Standard Version®), copyright © 2001 by Crossway, a
    publishing ministry of Good News Publishers. Used by permission. All rights
    reserved.
  </p>
  <p>
    Scripture quotations marked CSB have been taken from the Christian Standard
    Bible®, Copyright © 2017 by Holman Bible Publishers. Used by permission.
    Christian Standard Bible® and CSB® are federally registered trademarks of
    Holman Bible Publishers.
  </p>
  <h3>Library of Congress Cataloging-in-Publication Data</h3>
  <p>
    Anderson, Lloyd Tontz The Hidden Beauty of Hebrew Genealogies / Lloyd Tontz
    Anderson
  </p>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    },
  },
};
</script>
