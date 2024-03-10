<script setup>
    import { defineProps } from 'vue';
    import '../aframe/simple-navmesh-constraint'
    import '../aframe/listen-to'
    defineProps({
        model: String,
    })
</script>
<template>
    <a-entity id="elWall">
        <a-entity
            scale="1 2.5 1"
            :gltf-model="model"
        ></a-entity>
        <a-box
            width="1.5"
            height="2"
            depth="0.05"
            color="grey"
            position="-0.25 0.75 0"
        ></a-box>
    </a-entity>
</template>