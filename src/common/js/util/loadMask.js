/** [loadMask 加载遮罩] */
export const loadMask = function (Vue, options) {
  Vue.prototype.loadMask = {
    loadMaskStr: '<div class="load"><div class="circleGroup"><div class="circle"></div><div class="circle"></div><div class="circle"></div></div></div>',
    body: document.body,
    showMask: function (key, value) {
      this.createLoadMask();
      this.body.appendChild(this.loadMaskNode);
    },
    removeMask: function (key) {
      this.body.removeChild(this.loadMaskNode);
    },
    createLoadMask: function () {
      this.loadMaskNode = document.createElement('div');
      var circleGroup = this.loadMaskNode.cloneNode();
      var circle1 = this.loadMaskNode.cloneNode();
      var circle2 = this.loadMaskNode.cloneNode();
      var circle3 = this.loadMaskNode.cloneNode();
      this.loadMaskNode.className = 'load';
      circleGroup.classList.add('circleGroup');
      circle1.classList.add('circle');
      circle1.classList.add('delay-one');
      circle2.classList.add('circle');
      circle2.classList.add('delay-twos');
      circle3.classList.add('circle');
      circleGroup.appendChild(circle1);
      circleGroup.appendChild(circle2);
      circleGroup.appendChild(circle3);
      this.loadMaskNode.appendChild(circleGroup);
    }
  };
};
