AFRAME.registerComponent('emit-when-near', {
  mulitple: true,

  schema: {
    target: {type: 'selector', default: '[camera]'},
    distance: {type: 'number', default: 1},
    event: {type: 'string', default: 'click'},
    eventFar: {type: 'string', default: 'unclick'},
    throttle: {type: 'number', default: 100},
  },
  init: function () {
    this.tick = AFRAME.utils.throttleTick(this.checkDist, this.data.throttle, this);
    this.emiting = false;
    this.myPos = new THREE.Vector3(0, 0, 0);
    this.targetPos = new THREE.Vector3(0, 0, 0);
  },
  checkDist: function () {
    const firstTime = true;
    this.el.object3D.getWorldPosition(this.myPos);
    this.data.target.object3D.getWorldPosition(this.targetPos);
    const distanceTo = this.myPos.distanceTo(this.targetPos);
    if (distanceTo <= this.data.distance) {
      if (this.emiting) return;
      this.emiting = true;
      this.el.emit(this.data.event, {collidingEntity: this.data.target}, false);
      this.data.target.emit(this.data.event, {collidingEntity: this.el}, false);
      if(this.el.hasAttribute('id') && this.el.getAttribute('id') === 'elWall'){
        this.el.setAttribute("sound", "src: #sound-2; autoplay:true; volume:0.5");
      }else{
        this.el.setAttribute("sound", "src: #sound-4; autoplay:true; volume:0.2;")
      }
      if(this.el.getAttribute('class') === 'f'){
        const elementsWall = document.querySelectorAll('.newMov');
        elementsWall.forEach(function(element) {
          element.setAttribute("emit-when-near", "distance:2;");
          element.setAttribute("animation", "property: position; to:-7 0.5 -2; dur:2000; startEvents:click;")
        });
        const elementsGhost2 = document.querySelectorAll('#ghost2');
        elementsGhost2.forEach(function(element) {
          element.setAttribute("emit-when-near", "distance:1.5;");
        });
        const elementsFootstep = document.querySelectorAll('.footstepChange');
        elementsFootstep.forEach(function(element) {
          const childElements = element.querySelectorAll('a-entity');
          childElements.forEach(function(child) {
            if(child.hasAttribute('visible')){
              child.setAttribute('visible', 'true')
            } else {
              child.setAttribute("rotation", "0 -30 0");
            }
          });
        });
      }
      
    } else {
      if (!this.emiting) return;
      this.el.emit(this.data.eventFar, {collidingEntity: this.data.target}, false);
      this.data.target.emit(this.data.eventFar, {collidingEntity: this.el}, false);
      this.emiting = false;
    }
  },
});