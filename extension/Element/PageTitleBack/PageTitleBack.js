(function (WjsProto) {
  'use strict';
  /**
   * @require JsMethod > cssAnimationDelayOffsetText
   */
  WjsProto.register('Element', 'PageTitleBack', {
    classExtends: 'Element\\Clip',
    optionsDefault: {
      width: 400,
      height: 100,
      top: -80
    },

    initElement: function () {
      var self = this;
      // Page may not be loaded.
      this.wjs.loaders.WebPage.pageReady(function () {
        // Get title from current page.
        self.dom.querySelector('h2').innerHTML = self.wjs.loaders.WebPage.pageCurrent.title;
        self.wjs.cssAnimationDelayOffsetText(self.dom.querySelector('h2'), 0.08, 2);
      });
    },

    exitElement: function () {
      this.wjs.cssAnimationDelayOffsetText(this.dom.querySelector('h2'), 0.05, 0, undefined, true, false);
    }
  });
}(WjsProto));
