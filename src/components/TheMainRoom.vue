<script setup>

  import PortalTeleporter from './PortalTeleporter.vue';

  import '../aframe/multiply-cube.js';
  import Labyrinthe from './Labyrinthe.vue';
  import Welcome from './Welcome.vue';

  import '../aframe/listen-to.js';
  import '../aframe/life-like-automaton.js';
  import '../aframe/sakura-circle.js';

  defineProps({
    scale: Number,
  });

</script>

<template>
<a-entity
    position="0 0 0"
    :multiply-cube="`
      width: 1;
      height: 0.5;
      depth: 1;
      cols: 6;
      rows: 6;
      `">
    <a-sky color="black"></a-sky>
    <a-entity gltf-model="#sky" scale="4 4 4" position="0 100 0" sound="src: #sound-1; autoplay: true; loop: true; volume: 0.5;"></a-entity>
    <Welcome />
    <Labyrinthe />
    <PortalTeleporter 
      material="color: black"
      position="-4.75 1.2 -5.3"
      rotation="0 0 0"
      :rot="45"
      :y="200"
      :x="-0.25"
      :z="-0.25"
  /></a-entity>
  <!-- Light -->
  <a-entity 
    light="type: point; intensity: 0.10; distance: 50; decay: 2"
    position="0 10 10"
  ></a-entity>
  <!-- MURS DE LA PIECE -->
  <a-entity>
    <a-box position="-2.5 1.25 0.45" width="6" height="2" depth="0.05" color="grey">
      <a-entity
            position="1.4 -0.75 0"
            scale="1.7 3 1"
            gltf-model="#wall"
      ></a-entity>
      <a-entity
            position="-1.4 -0.75 0"
            rotation="0 180 0"
            scale="1.7 3 1"
            gltf-model="#wall"
      ></a-entity>
    </a-box>
  </a-entity>
  <a-entity>
    <a-box position="-2.5 1.25 -5.45" width="6" height="2" depth="0.05" color="grey">
      <a-entity
            position="1.4 -0.75 0"
            scale="1.7 3 1"
            gltf-model="#wall"
      ></a-entity>
      <a-entity
            position="-1.4 -0.75 0"
            rotation="0 180 0"
            scale="1.7 3 1"
            gltf-model="#wall"
      ></a-entity>
    </a-box>
  </a-entity>
  <a-entity>
    <a-box rotation="0 90 0" position="-5.45 1.25 -2.5" width="6" height="2" depth="0.05" color="grey">
      <a-entity
            position="1.4 -0.75 0"
            scale="1.7 3 1"
            gltf-model="#wall"
      ></a-entity>
      <a-entity
            position="-1.4 -0.75 0"
            rotation="0 180 0"
            scale="1.7 3 1"
            gltf-model="#wall"
      ></a-entity>
    </a-box>
  </a-entity>
  <a-entity>
    <a-box rotation="0 -90 0" position="0.45 1.25 -2.5" width="6" height="2" depth="0.05" color="grey">
      <a-entity
            position="1.4 -0.75 0"
            scale="1.7 3 1"
            gltf-model="#wall"
      ></a-entity>
      <a-entity
            position="-1.4 -0.75 0"
            rotation="0 180 0"
            scale="1.7 3 1"
            gltf-model="#wall"
      ></a-entity>
    </a-box>
  </a-entity>
  <!-- Main room navigation mesh  -->
  <a-entity
    geometry="primitive: plane; height: 5.5; width: 2.5"
    position="-0.8 0 -2.5"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
  ></a-entity>
  <a-entity
    geometry="primitive: plane; height: 5.5; width: 1.2"
    position="-4.8 0 -2.5"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: red"
  ></a-entity>
  <a-entity
    geometry="primitive: plane; height: 1.2; width: 3"
    position="-3.3 0 0"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: green"
  ></a-entity>
</template>