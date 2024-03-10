AFRAME.registerComponent('multiply-cube', {
    schema: {
      width: {type: 'number', default: 1},
      height: {type: 'number', default: 1},
      depth: {type: 'number', default: 1},
      cols: {type: 'number', default: 0},
      rows: {typa: 'number', default:0},
      model: {type: 'string', default: ''},
      y: {type: 'number', default: 0}
    },
    
    init: function () {
        // Do something when component first attached.
    },

    update: function () {
      // Do something when component's data is updated.
      for (let i = 0; i < this.data.rows; i++) {
        for (let j = 0; j < this.data.cols; j++) {
          // Set box attributes and make it pop
          const nCube = document.createElement('a-box');
          nCube.setAttribute("width", this.data.width);
          nCube.setAttribute("height", this.data.height);
          nCube.setAttribute("depth", this.data.depth);
          nCube.setAttribute("color", "#C2E7DA");
          if(this.data.model){
            nCube.setAttribute("gltf-model", this.data.model);
            nCube.setAttribute("scale", ".25 .25 .25");
          }
          
          nCube.setAttribute("position", {
            x: -(nCube.object3D.position.x + i * this.data.width),
            z: -(nCube.object3D.position.z + j * this.data.depth),
            y: this.data.y
          })
          document.querySelector("a-entity").appendChild(nCube);
        }
      }
    },

    remove: function () {
      // Do something the component or its entity is detached.
    
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
});
