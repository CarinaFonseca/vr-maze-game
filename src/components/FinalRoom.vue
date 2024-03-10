<script setup>
  import SnowTree from './SnowTree.vue';
  import '../aframe/multiply-cube';
</script>
<template>
  <a-entity
    position="0 200 0"
    :multiply-cube="`
      width: 1;
      height: 0.5;
      depth: 1;
      cols: 12;
      rows: 12;
      y: 199.75
      `"
  >
    <a-entity>
      <!-- Snow trees -->
      <SnowTree position="-6 0 -3" rotation="0 45 0"/>
      <SnowTree position="-3 0 -6" rotation="0 180 0"/>
      <SnowTree position="-5 0 -0.5" rotation="0 100 0"/>
      <SnowTree position="-0.5 0 -5" rotation="0 30 0"/>
      <SnowTree position="-8 0 -8" rotation="0 30 0"/>
      <SnowTree position="-8.5 0 -2" rotation="0 180 0"/>
      <!-- Car -->
      <a-entity
        gltf-model="#car"
        position="-3 0.1 -9"
        scale=".03 .03 .03"
        rotation="0 -135 0"
      ></a-entity>
      <!-- Camp tent -->
      <a-entity>
        <a-entity
          gltf-model="#tent"
          position="-4 0 -4"
          rotation="0 45 0"
          scale=".35 .35 .35"
        ></a-entity>
        <a-entity
          gltf-model="#backpack"
          position="-4 -0.8 -4"
        ></a-entity>
        <a-entity
          gltf-model="#glass-bin"
          position="-4.7 0 -4.1"
          scale=".25 .25 .25"
          rotation="0 45 0"
        ></a-entity>
        <a-entity
          gltf-model="#lemon"
          position="-4.9 0.55 -4.1"
          scale=".1 .1 .1"
        ></a-entity>
      </a-entity>
      <!-- Camp fire -->
      <a-entity>
        <a-entity
          gltf-model="#camp-fire"
          position="-2.5 0.3 -2.5"
          scale=".6 .6 .6"
          sound="src:#sound-3; loop:true; autoplay:true"
        ></a-entity>
        <a-entity
          gltf-model="#fire"
          position="-2.5 0.3 -2.5"
          scale="1.4 1.4 1.4"
          animation-mixer
        ></a-entity>
      </a-entity>
    </a-entity>
  </a-entity>
  <!-- End message -->
  <a-entity 
    position="-3 202.5 -5" 
    text="value: Well done! You've found your way back.;" 
    scale="10 10 10"
    rotation="0 45 0"
    width="2"
    height="2"
  ></a-entity>
  <!-- Light -->
  <a-entity 
    light="type: point; intensity: 0.40; distance: 50; decay: 2"
    position="0 210 10"
  ></a-entity>
  <!-- Physic room navigation mesh -->
  <a-entity
    geometry="primitive: plane; height: 11; width: 11"
    position="-5 200.1 -5"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: green"
    visible="false"
  ></a-entity>
</template>