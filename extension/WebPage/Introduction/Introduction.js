(function (WjsProto) {
  'use strict';
  /**
   * @require Element > D3RingRainbow
   * @require Element > PageTitleBack
   * @require Plugin > D3WebComRotate
   */
  WjsProto.register('WebPage', 'Introduction', {
    optionsDefault: {
      require: {
        Element: ['PageTitleBack']
      },
      requireStatic: {
        Element: ['D3RingRainbow'],
        WebCom: ['GithubRibbon']
      }
    },
    initWebPage: function () {
      // Start animation.
      this.wjs.wexampleRainbow.D3Ring.animate({
        rotateH: 90,
        rotateP: -90
      }, {
        duration: 3000,
        easing: [0.7, 0, 0, 1]
      });
    }
  });
}(WjsProto));
