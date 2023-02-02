<template>
  <v-app>
    <!-- 头部应用栏 -->
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- 主体部分 -->
    <v-main>
      <!-- 跑马灯 -->
      <v-carousel
        hide-delimiters
        cycle
        interval="4000"
        height="130"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          max-height="260"
          max-width="640"
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
        <!-- <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">{{ slide }} Slide</div>
            </v-row>
          </v-sheet>
        </v-carousel-item> -->
      </v-carousel>

      <!-- 主路由 -->
      <router-view />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      main

      <hr />
    </v-main>

    <hr />

    <!-- 关于我们 -->
    <About />
    <hr />

    <!-- 底部导航栏 -->
    <v-bottom-navigation v-model="bottomNav" color="primary" fixed="true">
      <!-- <v-btn value="1" v-click-outside="click1"> -->
      <v-btn value="1">
        <span>主页</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn value="2">
        <span>分享</span>
        <v-icon>mdi-share</v-icon>
      </v-btn>

      <v-btn value="3">
        <span>购物车</span>
        <v-icon>mdi-cart</v-icon>
      </v-btn>

      <v-btn value="4">
        <span>管理</span>
        <v-icon>mdi-cog</v-icon>
      </v-btn>

      <v-btn value="5">
        <span>我的</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import About from './views/About.vue';
export default Vue.extend({
  name: 'App',
  components: {
    About,
  },
  data: () => ({
    bottomNav: '3',
    items: [
      {
        src: './imgs/adimgs/banner-0.jpg',
      },
      {
        src: './imgs/adimgs/banner-1.jpg',
      },
      {
        src: './imgs/adimgs/banner-2.jpg',
      },
      {
        src: './imgs/adimgs/banner-3.jpg',
      },
      {
        src: './imgs/adimgs/banner-4.jpg',
      },
      {
        src: './imgs/adimgs/banner-5.jpg',
      },
    ],
  }),
  methods: {
    click1() {
      console.log('你刚才click1了');
    },
  },
});
</script>
