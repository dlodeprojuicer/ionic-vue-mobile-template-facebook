
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <div class="logo">
          facebook
        </div>

        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="search"></ion-icon>
          </ion-button>
          <ion-button>
            <ion-icon :icon="chatbubbleOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
      <div class="menu">
        <ion-button v-for="(i, idx) in menu" :key="idx">
          <ion-icon :icon="i"></ion-icon>
        </ion-button>
      </div>
    </ion-header>

    <ion-content :fullscreen="true">
      <StatusInput />
      <Stories :data="stories" />

      <ion-card v-for="(item, index) in posts" :key="index">
        <div class="post-author">
          <ion-icon :icon="personCircleOutline"></ion-icon> 
          <span>{{ item.name }}</span>
        </div>

        <img
          class="card-image"
          :src="item.image"
          :alt="item.name"
          @click="likeDoubleClick()"
        />

        <Reactions :likePost="likePost" @likeClick="likeClick" />

        <ion-card-header>
          <ion-card-subtitle class="likes" v-if="item.likes > 0">{{ item.likes }} likes</ion-card-subtitle>
          <div class="author" v-if="item.description">
            {{ item.name }} <span class="description">{{ item.description }}</span>
          </div>
        </ion-card-header>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import Reactions from "./../components/Reactions";
import Stories from "./../components/Stories";
import StatusInput from "./../components/StatusInput";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle
} from "@ionic/vue";

import { 
  personCircleOutline, 
  search, 
  filterOutline, 
  closeOutline, 
  heartOutline, 
  paperPlaneOutline, 
  chatbubbleOutline, 
  heart,
  notificationsOutline,
  tvOutline,
  menuOutline,
  peopleCircleOutline,
  home,
  storefrontOutline
} from "ionicons/icons";

export default {
  name: "Explorer",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonIcon,
    IonButton,
    IonButtons,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    Reactions,
    Stories,
    StatusInput
  },
  setup() {
    const menu = [
      home,
      peopleCircleOutline,
      tvOutline,
      storefrontOutline,
      notificationsOutline,
      menuOutline
    ]
    return {
      search,
      filterOutline,
      closeOutline,
      heartOutline,
      paperPlaneOutline,
      personCircleOutline,
      chatbubbleOutline,
      heart,
      menu
    };
  },
  data() {
    return {
      likePost: false,
      click: undefined,
      clickType: 'Click or Doubleclick ME'
    }
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
    stories() {
      return this.$store.getters.stories;
    }
  },
  methods: {
    likeDoubleClick() {
      return new Promise ((resolve) => {
        if (this.click) {
          clearTimeout(this.click)
          resolve('Detected DoubleClick');
          this.likePost = !this.likePost;
          this.click = undefined;
          return;
        }

        this.click = setTimeout(() => {
         this.click = undefined;
         resolve('Detected SingleClick')
        }, 400)
      })
    },
    likeClick() {
      this.likePost = !this.likePost;
    }
  }
};
</script>

<style lang="scss" scoped>
ion-toolbar, ion-header {
  --background: var(--ion-color-light);
  color: #ffffff;
  padding: 0;
  margin: 0;
}

.logo {
  padding: 10px 0 0 10px;
  font-weight: bolder;
  font-size: 26px;
}

.menu {
  background: var(--ion-color-light);
  ion-button {
    --background: none;
    font-size: 20px;

    &::part(native) {
      padding: 10px;
      margin: 0 5px;
      // background: blue;
    }

    ion-icon {
      --background: blue;
      padding: 0;
      margin: 0;
    }
  }
}

.post-author {
  margin: 10px;
  color: #ffffff;
  font-weight: 500;
  text-transform: lowercase;
  ion-icon {
    margin-bottom: -10px;
    font-size: 30px;
  }
  span {
    font-size: 16px;
    margin: 0 0 0 5px;
  }
}
.card-image {
  width: 100%;
}

ion-card {
  --background: var(--ion-color-light);
  margin: 10px 0;
}

ion-card-header {
  padding: 10px;
}

ion-card-subtitle.likes {
  text-transform: lowercase;
  color: #fff;
  font-size: 15px;
}

.author {
  text-transform: lowercase;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  span {
    font-weight: initial;
    text-transform: initial;
  }
}
</style>
  