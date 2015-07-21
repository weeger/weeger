(function (WjsProto) {
  'use strict';
  /**
   * @require Element > D3RingRainbow
   * @require Element > HomeCircle
   * @require Element > HomeMenu
   */
  WjsProto.register('WebPage', 'Home', {
    optionsDefault: {
      require: {
        Element: [
          'HomeCircle',
          'HomeMenu'
        ]
      },
      requireStatic: {
        Element: ['D3RingRainbow']
      }
    },

    initWebPage: function () {
      // Start animation.
      this.wjs.wexampleRainbow.D3Ring.animate({
        rotateH: 90,
        rotateP: 1 // TODO 0 do not work
      }, {
        duration: 3000,
        easing: [0.7, 0, 0, 1]
      });
    }
  });
}(WjsProto));
