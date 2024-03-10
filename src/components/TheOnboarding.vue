<script setup>
  import { ref } from 'vue';

  defineProps({
    loaded: Boolean,
  });

  const showOnboarding = ref(true);

  function enterScene() {
    showOnboarding.value = false;
    if (AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()) {
      document.querySelector('a-scene').enterVR();
    }
    document.querySelector('a-scene').emit('enter-scene');
  }
</script>

<template>
  <div id="onboarding" v-if="showOnboarding">
    <div>
      <h1>A-Frame + Vite + Vue Boilerplate</h1>
      <p v-if="!loaded">loading...</p>
      <button v-if="loaded" @click="enterScene()">Enter scene</button>
      <div class="licences">
        <section>
          <h4>Story</h4>
          <p>You've gone camping alone in the forest. After pitching your tent, you decided to go for a walk in the woods. 
            Unfortunately, it got dark and you got lost. You're trapped in a maze. Find the way out and get back to your camp.</p>
        </section>
        <section>
          <h4>Movement modes support</h4>
          <ul>
            <li>
              Desktop – Keyboard for move (WASD or Arrows keys) + Mouse for look
              control (Drag and drop)
            </li>
            <li>
              Mobile – 1x Finger touch to go forward + 2x Fingers touch to go
              backward + Gaze cursor for click
            </li>
            <li>
              VR/AR – walk + Teleport (Grip for grab and laser for
              click) + Gaze cursor for click
            </li>
          </ul>
        </section>
        <section>
          <h4>Source code</h4>
          <blockquote><a href="https://github.com/CarinaFonseca/vr-maze-game.git">Github repo</a></blockquote>
        </section>
        <dl>
          <dt>
            <i>Included</i>
          </dt>
          <dt>
            <a href="https://github.com/c-frame/aframe-extras" target="_blank">aframe-extras controls and animation-mixer</a>
          </dt><dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/c-frame/physx" target="_blank">aframe physx</a>
          </dt><dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/jure/aframe-blink-controls/" target="_blank">aframe-blink-controls</a>
          </dt><dd>
            <a href="https://github.com/jure/aframe-blink-controls/blob/main/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/diarmidmackenzie/aframe-multi-camera/" target="_blank">aframe-multi-camera</a>
          </dt><dd>
            <a href="https://github.com/diarmidmackenzie/aframe-multi-camera/blob/main/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href=" https://github.com/AdaRoseCannon/aframe-xr-boilerplate" target="_blank">simple-navmesh-constraint</a>
          </dt><dd>
            By Ada Rose Cannon under MIT License
          </dd>

<!-- Assets -->

          <dt>
            <a href="https://sketchfab.com/3d-models/extracted-minecraft-java-editions-stars-c8868b7ffc4a473eb5cd9203a59e3650" target="_blank">[Extracted] Minecraft Java Edition's Stars</a>
          </dt><dd>
            by <a href="https://sketchfab.com/ajaxgb" target="_blank">AjaxGb</a>
          </dd>  
          <dt>
            <a href="https://sketchfab.com/3d-models/brick-wall-1-a90e5e31e9dc45f8bb2d506d4c6a5ae6" target="_blank">Brick wall</a>
          </dt><dd>
            by <a href="https://sketchfab.com/guillermot" target="_blank">Guillermo T</a>
          </dd>
          <dt>
            <a href="https://sketchfab.com/3d-models/brick-wall-2-b2a2823931bd4c8da8b55d19adc637a7" target="_blank">Brick wall 2</a>
          </dt><dd>
            by <a href="https://sketchfab.com/guillermot" target="_blank">Guillermo T</a>
          </dd>
          <dt>
            <a href="https://sketchfab.com/3d-models/low-poly-ghost-6a0a938bbce64356ae09e19a3152cfac" target="_blank">low poly ghost</a>
          </dt><dd>
            by <a href="https://sketchfab.com/AbsoluteMadLadd" target="_blank">AbsoluteMadLadd</a>
          </dd>
          <dt>
            <a href="https://sketchfab.com/3d-models/pbis-footsteps-bd01a6968cab4846b25dc7327ce20f5f" target="_blank">PBIS Footsteps</a>
          </dt><dd>
            by <a href="https://sketchfab.com/itd_cnr" target="_blank">itd_cnr</a>
          </dd>
          <dt>
            <a href="https://sketchfab.com/3d-models/low-poly-survival-tent-f3f5283fa07a47e798017bc3c055fe88" target="_blank">Low-poly Survival Tent</a>
          </dt><dd>
            by <a href="https://sketchfab.com/simonaskLDE" target="_blank">simonaskLDE</a>
          </dd>
          <dt>
            <a href="https://sketchfab.com/3d-models/car-low-poly-12e0d1b6d1254966978a1745343e94f7" target="_blank">Car (Low poly)</a>
          </dt><dd>
            by <a href="https://sketchfab.com/daviddickball " target="_blank">daviddickball</a>
          </dd>
          <dt>
            <a href="https://sketchfab.com/3d-models/treesnow-low-poly-7ee107eab0a44cf8ac6ce1525821a17a">Tree(Snow) Low Poly</a>
          </dt><dd>
            by <a href="https://sketchfab.com/28366140" target="_blank">28366140</a>
          </dd>
          <dt>
            <a href="https://sketchfab.com/3d-models/medieval-fantasy-camp-fire-asset-611b74668b0b450c9668e2938fde54b3" target="_blank">Medieval Fantasy - Camp Fire Asset</a>
          </dt><dd>
            by <a href="https://sketchfab.com/vanart" target="_blank">Scott VanArsdale</a>
          </dd>
          <dt>
            <a href="https://sketchfab.com/3d-models/fire-c678d3cb21a94cd38e52abb50a503c40" target="_blank">Fire</a>
          </dt><dd>
            by <a href="https://sketchfab.com/guillermot" target="_blank">Guillermo T</a>
          </dd>
          <dt>
            <a href="https://sketchfab.com/3d-models/travel-backpack-e7dc65bbf189461d89899b42082a802c" target="_blank">Travel Backpack</a>
          </dt><dd>
            by <a href="https://sketchfab.com/Whatta" target="_blank">Whatta</a>
          </dd>
          <dt>
            <a href="https://sketchfab.com/3d-models/glass-bin-low-poly-7a034ad2906f417b84057b140cd7b2c7" target="_blank">Glass bin [Low Poly]</a>
          </dt><dd>
            by <a href="https://sketchfab.com/Islide" target="_blank">Islide</a>
          </dd>
          <dt>
            <a href="https://sketchfab.com/3d-models/lemon-low-poly-8934f1e73b1e4f679c74f4eb1d4cd53a" target="_blank">Lemon - Low Poly</a>
          </dt><dd>
            by <a href="https://sketchfab.com/calebcram" target="_blank">calebcram</a>
          </dd>

        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h1 { font-size: 1.5rem }
  a {
    color: #eee;
    text-decoration: none;
  }
  .licences {
    margin: 2rem 0;
    padding-bottom: 1rem;
    font-size: 1rem;
    text-align: left;
  }
  .licences dt {
    padding-top: 0.75rem;
    font-size: 0.9rem;
    font-weight: bold;
  }
  .licences dd {
    margin-left: 0;
    font-size: 0.8rem;
  }

  #onboarding {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #333;
    color: #ccc;
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    font-family: monospace;
    z-index: 10000;
    overflow: auto;
  }
  #onboarding > * {
    margin: 0 auto;
    max-width: 50rem;
    width: calc(100vw - 10rem);
    text-align: center;
    border-radius: 0.3rem;
    padding: 1rem;
    font-size: 1.3rem;
  }
  #onboarding button {
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;
  }
</style>#onboarding li {
#onboarding li {
  font-size: 1rem;
  text-align: left;
}
