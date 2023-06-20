<template>
  <swiper>
    <swiper-slide
      v-for="(item, index) in data"
      :key="index"
      :spaceBetween="30"
      :slidesPerView="3"
    >
      <ion-card :class="item.name">
        <img :src="item.image" width="100%" />
        <h3>{{ item.name }} {{ item.lastname }}</h3>
      </ion-card>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { IonCard } from "@ionic/vue";

import "swiper/css";
import "@ionic/vue/css/ionic-swiper.css";

export default {
  name: "people",
  components: { Swiper, SwiperSlide, IonCard },
  props: {
    data: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
ion-slide {
  width: 105px !important;
  margin: 10px 0;
  padding: 5px 0;
  background: var(--ion-color-light);
}

ion-card {
  height: 150px;
  width: 100px;
  padding: 0;
  margin: 5px;
  // background-image: url("/assets/images/snoop.png");
  background-size: cover;

  img {
    border-radius: 99px;
    width: 35px;
    height: 35px;
    float: left;
    margin: 3px;
    border: 3px blue solid;
  }

  h3 {
    color: #fff;
    position: absolute;
    bottom: 0px;
    left: 5px;
    font-size: 15px;
  }

  &.jay-z {
    background-image: url("/assets/images/jay-z-story.jpeg");
    background-size: cover;
    background-position: center;
  }

  &.snoop {
    background-image: url("/assets/images/snoop-story.jpeg");
    background-size: cover;
    background-position: center;
  }

  &.makazole {
    background-image: url("/assets/images/makazole-story.jpeg");
    background-size: cover;
    background-position: center;
  }

  &.max {
    background-image: url("/assets/images/max-story.jpeg");
    background-size: cover;
    background-position: center;
  }

  &.lewis {
    background-image: url("/assets/images/lewis-story.jpg");
    background-size: cover;
  }
}

ion-card-title {
  font-size: 13px !important;
  // text-align: left;
  color: #fff;
}
</style>
