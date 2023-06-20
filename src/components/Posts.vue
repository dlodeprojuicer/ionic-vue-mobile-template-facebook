<template>
  <ion-card v-for="(item, index) in data" :key="index">
    <ion-grid class="post-author">
      <ion-row>
        <ion-col size="2" class="image">
          <img :src="item.pic" :alt="item.name" />
        </ion-col>
        <ion-col class="author">
          {{ item.name }}
          <div class="timestamp">{{ item.timestamp }}</div>
        </ion-col>
      </ion-row>
    </ion-grid>

    <ion-card-header class="caption" v-if="item.description">
      {{ item.description }}
    </ion-card-header>
    <img
      class="card-image"
      :src="item.image"
      :alt="item.name"
      @click="likeDoubleClick()"
    />

    <Reactions :likePost="likePost" @likeClick="likeClick" />
  </ion-card>
</template>

<script>
import Reactions from "./Reactions.vue";

import { IonCard, IonCardHeader, IonGrid, IonRow, IonCol } from "@ionic/vue";

import { personCircleOutline } from "ionicons/icons";

export default {
  name: "people",
  components: {
    Reactions,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
  },
  props: {
    data: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      likePost: false,
    };
  },
  setup() {
    return {
      personCircleOutline,
    };
  },
  methods: {
    likeDoubleClick() {
      return new Promise((resolve) => {
        if (this.click) {
          clearTimeout(this.click);
          resolve("Detected DoubleClick");
          this.likePost = !this.likePost;
          this.click = undefined;
          return;
        }

        this.click = setTimeout(() => {
          this.click = undefined;
          resolve("Detected SingleClick");
        }, 400);
      });
    },
    likeClick() {
      this.likePost = !this.likePost;
    },
  },
};
</script>

<style lang="scss" scoped>
ion-card {
  letter-spacing: 0.5px;
}

ion-grid.post-author {
  padding-bottom: 0;

  ion-col {
    --padding: 0;
    --margin: 0;
    max-width: fit-content !important;
  }

  img {
    border-radius: 99px;
    width: 35px;
    height: 35px;
  }

  .author {
    font-weight: bold;
    color: #f5f4f4;

    .timestamp {
      font-weight: 400;
      font-size: 11px;
      color: #d8d5d5;
    }
  }
}

.card-image {
  width: 100%;
}

ion-card {
  --background: var(--ion-color-light);
  margin: 10px 0;
  --border-radius: none;
}

ion-card-header.caption {
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 5px;
  padding: 10px;
}
</style>
