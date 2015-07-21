(function (WjsProto) {
  'use strict';
  /**
   * @require Element > Clip
   */
  WjsProto.register('Element', 'HomeMenu', {
    classExtends: 'Element\\Clip',

    optionsDefault: {
      width: 400,
      height: 100
    },

    initElement: function () {
      this.animationDelayActivate(1, false);
    },

    exitElement: function () {
      this.animationDelayActivate(0, true);
    },

    /**
     * Add delayed animation on each menu item.
     * @require JsMethod > cssAnimationDelayOffset
     */
    animationDelayActivate: function (globalDelay, reversed) {
      // "true" means that delay will be deleted to not be
      // applied on mouse hover animation.
      this.wjs.cssAnimationDelayOffset(this.dom, 'li a', 0.2, globalDelay, 1, true, reversed);
    }
  });
}(WjsProto));
