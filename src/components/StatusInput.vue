<template>
  <ion-grid>
    <ion-row>
      <ion-col size="2">
        <img src="/assets/images/snoop.png" width="100%" />
      </ion-col>
      <ion-col>
        <ion-input placeholder="What's on your mind?" />
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonInput } from "@ionic/vue";

export default {
  name: "people",
  components: { IonInput, IonGrid, IonRow, IonCol, },
  methods: {},
};
</script>

<style lang="scss" scoped>
ion-grid {
  color: #fff;
  background: var(--ion-color-light);
}

ion-input {
  border: 1px solid #383838;
  border-radius: 200px;
  --padding: 300px;
}
img {
  border-radius: 99px;
  width: 40px;
  height: 40px;
  float: left;
  margin: 3px;
}
</style>
