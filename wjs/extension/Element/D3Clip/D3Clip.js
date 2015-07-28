/**
 * @require Element > D3WebCom
 * @require JsClass > ThreeObject3d
 */
(function (WjsProto) {
  'use strict';
  WjsProto.register('Element', 'D3Clip', {
    classExtends: 'Element\\D3WebCom',

    renderDom: function (renderData) {
      this.__super('renderDom', arguments);
      // getWorldPosition() will execute updateMatrixWorld();
      this.distanceToCamera = this.object3d.getWorldPosition().distanceTo(this.D3World.cameraWorldPosition);
      // Dom may be disabled.
      if (this.dom) {
        // Convert to CSS.
        this.dom.style[this.wjs.cssVendorPrefix('transform')] = this.matrixToCss(this.object3d.matrixWorld);
      }
    },

    matrixToCss: function (matrix) {
      var i = 0, elements = matrix.elements, rounded = [];
      // Some browsers need matrix values to be rounded,
      // We also convert Float32Array to array to have the join() method.
      for (; i < elements.length; i++) {
        rounded.push(Math.round(elements[i] * 1000) / 1000);
      }
      return 'matrix3d(' + rounded.join(',') + ')';
    }
  });
}(WjsProto));
