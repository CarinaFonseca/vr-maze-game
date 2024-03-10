<script setup>
    import Wall from './Wall.vue';
    import '../aframe/emit-when-near.js';
    import '../aframe/emit-when-far.js';
    import '../aframe/hide-in-vr.js';
</script>
<template>
    <!-- First part -->
    <Wall
        model="#wall2" 
        position="0.3 0.5 -2"
        emit-when-far="distance:5; target:#head;"
        animation="property: position; to: 2 0.5 -2; dur: 2000; startEvents: click"  
    />
    <Wall
        model="#wall2"
        rotation="0 180 0"
        position="-1.7 0.5 -2"
    />
    <Wall 
        model="#wall2"
        position="-2.3 0.5 -1.9"
        rotation="0 90 0"
    />
    <Wall 
        model="#wall2"
        position="-3.1 0.5 -0.9"
        rotation="0 0 0"
    />
    <Wall 
        model="#wall2"
        position="-4.1 0.5 -1.9"
        rotation="0 90 0"
    />
    <Wall 
        class="newMov"
        model="#wall2"
        position="-5 0.5 -2"
    />
    <a-entity class="footstepChange">
        <a-entity
            gltf-model="#footstep"
            position="-1.1 .26 -1.3"
            rotation="0 90 0"
        ></a-entity>
        <a-entity
            gltf-model="#footstep"
            position="-1.6 .26 -1"
            rotation="0 135 0"
        ></a-entity>
        <a-entity
            gltf-model="#footstep"
            position="-2 .26 -0.5'"
            rotation="0 -40 0"
            visible="false"
        ></a-entity>
        <a-entity
            gltf-model="#footstep"
            position="-2.8 .26 -0.3'"
            rotation="0 -90 0"
            visible="false"
        ></a-entity>        
        <a-entity
            gltf-model="#footstep"
            position="-4.8 .26 -1.5'"
            rotation="0 -180 0"
            visible="false"
        ></a-entity>
    </a-entity>
    <!-- Second part -->
    <Wall 
        model="#wall2"
        position="-1 0.5 -3"
        rotation="0 90 0"
    />
    <Wall 
        model="#wall2"
        position="-1 0.5 -5.8"
        rotation="0 -90 0"
    />
    <Wall 
        model="#wall2"
        position="-2 0.5 -5"
        rotation="0 180 0"
    />
    <Wall 
        class="f"
        model="#wall2"
        position="-2 0.5 -3.8"
        rotation="0 180 0"
        emit-when-near="distance: 1.8"
        animation="property: rotation; to:0 90 0; dur: 2000; startEvents: click;"
        animation__2="property: position; to:-2.3 0.5 -3.7; dur:2000; startEvents: click"
    />
    <Wall 
        model="#wall2"
        position="-2.3 0.5 -6.5"
        rotation="0 90 0"
        emit-when-near="distance:3"
        animation="property: position; to:-2.3 0.5 -5.55; dur: 2000; startEvents: click;"
    />
    <Wall 
        model="#wall2"
        position="-3.5 0.5 -4.4"
        rotation="0 90 0"
    />
    <!-- Final wall -->
    <Wall
        model="#wall2" 
        position="-5 0.5 -4"
        rotation="0 180 0"
        emit-when-near="distance:1.5"
        animation="property: position; to: -6.5 0.5 -4; dur: 2000; startEvents: click" />
    <Wall 
        model="#wall2"
        position="-4.1 0.5 -3.7"
        rotation="0 90 0"
    />
    <Wall 
        model="#wall2"
        position="-4.1 0.5 -5.5"
        rotation="0 90 0"
    />
    <!-- Ghost -->
    <a-entity
        class="entityGhost"
        gltf-model="#ghost"
        position="-5 .8 1"
        rotation="0 90 0"
        scale=".08 .08 .08"
        emit-when-near="distance: 3.5"
        animation="property: position; to: -5 .8 -7; dur: 2000; startEvents: click;"
    ></a-entity>
    <a-entity
        class="entityGhost"
        position="-4.8 .8 -3.5"
        rotation="0 -90 0"
        emit-when-near="distance: 2"
        animation="property: position; to: -5 .8 -7; dur: 2000; startEvents: click;"
    >
        <a-entity
            gltf-model="#ghost"
            scale=".08 .08 .08"
        ></a-entity>
        <a-entity
            text="value: This way!"
            scale="2 2 2"
            rotation="0 90 0"
            position="0 1.1 -0.8"
        ></a-entity>
    </a-entity>
    <a-entity
        id="ghost2"
        class="entityGhost"
        position="-1.7 .8 -2.5"
        rotation="0 90 0"
        animation="property: position; to: -1.7 .8 2; dur: 2000; startEvents: click;"
    >
        <a-entity gltf-model="#ghost" scale=".08 .08 .08"></a-entity>
        <a-entity
            text="value: I'll help you. Follow me!"
            position="0 1.1 -0.55"
            rotation="0 90 0"
            scale="2 2 2"
        ></a-entity>
    </a-entity>
</template>