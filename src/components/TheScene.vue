<script setup>
  import { ref } from 'vue';

  import TheCameraRig from './TheCameraRig.vue';
  import TheMainRoom from './TheMainRoom.vue';
  import FinalRoom from './FinalRoom.vue';
  import Welcome from './Welcome.vue';
  import Labyrinthe from './Labyrinthe.vue';

  import '../aframe/simple-grab.js';

  defineProps({
    scale: Number,
    overlaySelector: String,
  });

  const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene stats
    background="color: black;"
    :webxr="`
      requiredFeatures: local-floor;
      referenceSpaceType: local-floor;
      optionalFeatures: dom-overlay;
      overlayElement: ${overlaySelector};
    `"
    xr-mode-ui="XRMode: xr"
    physx="
      autoLoad: true;
      delay: 1000;
      useDefaultScene: false;
      wasmUrl: lib/physx.release.wasm;
    "
    simple-grab
  >

    <a-assets @loaded="allAssetsLoaded = true">
      
      <a-asset-item id="sky" src="assets/vr_sky.glb"></a-asset-item>
      <a-asset-item id="wall" src="assets/vr_brick_wall_1.glb"></a-asset-item>
      <a-asset-item id="wall2" src="assets/vr_brick_wall_2.glb"></a-asset-item>
      <a-asset-item id="fire" src="assets/vr_fire.glb"></a-asset-item>
      <a-asset-item id="tent" src="assets/vr_tent.glb"></a-asset-item>
      <a-asset-item id="camp-fire" src="assets/vr_camp_fire.glb"></a-asset-item>
      <a-asset-item id="backpack" src="assets/vr_backpack.glb"></a-asset-item>
      <a-asset-item id="glass-bin" src="assets/vr_glass_bin.glb"></a-asset-item>
      <a-asset-item id="lemon" src="assets/vr_lemon.glb"></a-asset-item>
      <a-asset-item id="tree-snow" src="assets/vr_trees_now.glb"></a-asset-item>
      <a-asset-item id="ghost" src="assets/vr_ghost.glb"></a-asset-item>
      <a-asset-item id="car" src="assets/vr_car.glb"></a-asset-item>
      <a-asset-item id="footstep" src="assets/vr_footsteps.glb"></a-asset-item>
      <a-asset-item id="sound-1" response-type="arraybuffer" src="assets/sound-1.mp3" preload="auto"></a-asset-item>
      <a-asset-item id="sound-2" response-type="arraybuffer" src="assets/sound-2.mp3" preload="auto"></a-asset-item>
      <a-asset-item id="sound-3" response-type="arraybuffer" src="assets/sound-3.mp3" preload="auto"></a-asset-item>
      <a-asset-item id="sound-4" response-type="arraybuffer" src="assets/sound-4.mp3" preload="auto"></a-asset-item>
    </a-assets>

    <template v-if="allAssetsLoaded">
      <TheMainRoom :scale="scale" />
      <FinalRoom />
      <Welcome />
      <Labyrinthe />
    </template>

    <TheCameraRig />

  </a-scene>
</template>