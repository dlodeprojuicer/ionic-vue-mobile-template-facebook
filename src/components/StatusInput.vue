<template>
  <ion-grid>
    <ion-row>
      <ion-col size="2">
        <img src="/assets/images/snoop.png" width="100%" />
      </ion-col>
      <ion-col>
        <input placeholder="What's on your mind?" />
      </ion-col>
    </ion-row>
    <ion-row class="status-shortcuts">
      <ion-col>
        <ion-icon :icon="videocamOutline"></ion-icon> <span>Live</span>
      </ion-col>
      <ion-col>
        <ion-icon :icon="images"></ion-icon> <span>Photo</span>
      </ion-col>
      <ion-col>
        <ion-icon :icon="videocam"></ion-icon> <span>Room</span>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonIcon } from "@ionic/vue";

import { videocamOutline, videocam, images } from "ionicons/icons";

export default {
  name: "people",
  components: { IonGrid, IonRow, IonCol, IonIcon },
  setup() {
    return {
      videocam,
      images,
      videocamOutline
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
ion-grid {
  color: #fff;
  background: var(--ion-color-light);
  border-top: 1px solid var(--ion-color-medium);
}

input {
  border: 1px solid #383838;
  border-radius: 200px;
  padding: 10px 20px;
  width: 95%;
}

img {
  border-radius: 99px;
  width: 40px;
  height: 40px;
  float: left;
  margin: 3px;
}

.status-shortcuts {
  text-align: center;
  border-top: 1px solid var(--ion-color-medium);
  padding: 5px 0;

  ion-col {
    font-weight: bold;
    color: var(--ion-color-medium-tint);

    &:nth-child(2) {
      border-right: 1px solid var(--ion-color-medium);
      border-left: 1px solid var(--ion-color-medium);
    }
    
    ion-icon { // needs cleanup, looks hacky.
      position: absolute;
      top: 8px;
      left: 20px;
    }

    span {
      font-size: 13px;
    }
  }
}
</style>
