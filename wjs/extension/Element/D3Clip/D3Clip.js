/**
 * @require Element > D3WebCom
 * @require JsClass > ThreeObject3d
 */
(function (WjsProto) {
  'use strict';
  WjsProto.register('Element', 'D3Clip', {
    classExtends: 'Element\\D3WebCom',

    /**
     * @require JsMethod > cssVendorPrefix
     */
    initElement: function () {
      this.cssTransformName = this.wjs.cssVendorPrefix('transform');
    },

    renderDom: function (renderData) {
      this.__super('renderDom', arguments);
      // getWorldPosition() will execute updateMatrixWorld();
      this.distanceToCamera = this.object3d.getWorldPosition().distanceTo(this.D3World.cameraWorldPosition);
      // Dom may be disabled.
      if (this.dom) {
        // Convert to CSS.
        this.dom.style[this.cssTransformName] = this.matrixToCss(this.object3d.matrixWorld);
      }
    },

    matrixToCss: function (matrix) {
      // Transform Array32 to Array then join.
      return  'matrix3d(' + Array.prototype.slice.call(matrix.elements).join(',') + ')';
    }
  });
}(WjsProto));
