
<template>
	<ion-buttons class="reactions">
		<ion-button @click="likeFn">
			<ion-icon :icon="likePost ? thumbsUp : thumbsUpOutline"></ion-icon> Like
		</ion-button>
		<ion-button>
			<ion-icon :icon="chatboxOutline"></ion-icon> Comment
		</ion-button>
		<ion-button>
			<ion-icon :icon="arrowRedoOutline"></ion-icon> Share
		</ion-button>
	</ion-buttons>
</template>

<script>
import {
  IonButtons,
  IonButton,
  IonIcon
} from "@ionic/vue";

import { 
  thumbsUpOutline,
  thumbsUp,
  chatboxOutline,
  arrowRedoOutline
} from "ionicons/icons";

export default {
	name: "Reactions",
  props: {
    likePost: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  components: {
    IonIcon,
    IonButton,
    IonButtons
	},
  setup() {
    return {
      thumbsUpOutline,
      chatboxOutline,
      arrowRedoOutline,
      thumbsUp
    };
  },
  methods: {
    likeFn() {
			this.$emit("likeClick", !this.likePost);
    }
  }
};
</script>

<style lang="scss" scoped>
.reactions {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  color: #fff;
  ion-button, button {
    font-size: 13px;
    margin: 5px;

    &:nth-child(2) {
      border-right: 1px solid var(--ion-color-medium);
      border-left: 1px solid var(--ion-color-medium);
    }

    ion-icon {
      margin-right: 7px;
    }
  }
}
</style>
  