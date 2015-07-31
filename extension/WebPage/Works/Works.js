(function (WjsProto) {
  'use strict';
  /**
   * @require Element > D3RingRainbow
   * @require Element > PageTitleBack
   * @require Element > SineGallery
   * @require Element > WorkContent
   * @require Plugin > D3WebComRotate
   * @require Json > Works
   * @require Json > Technology
   */
  WjsProto.register('WebPage', 'Works', {

    optionsDefault: {
      require: {
        Element: [
          'PageTitleBack'
        ]
      },
      requireStatic: {
        Element: ['D3RingRainbow'],
        WebCom: ['GithubRibbon']
      }
    },

    initWebPage: function () {
      var D3Ring = this.wjs.wexampleRainbow.D3Ring;
      // Start animation.
      D3Ring.animate({
        rotateH: 90,
        rotateP: 45
      }, {
        duration: 3000,
        easing: [0.7, 0, 0, 1]
      });
      D3Ring.stateSet('active', false);

      this.galleryTech = this.wjs.loaders.Element.instance('SineGallery', {
        direction: -1,
        top: 180,
        left: 80,
        snapSize: 100,
        links: this.wjs.get('Json', 'Technology'),
        cssClasses: ['galleryTech'],
        sineYFreq: 270,
        sineYAmp: 40,
        imagesPath: this.client + 'images/'
      });
      this.wjs.cssAnimationDelayOffset(this.galleryTech.dom, 'a', 0.2, 0, 1, false, true);

      this.galleryWorks = this.wjs.loaders.Element.instance('SineGallery', {
        top: 0,
        left: 100,
        snapSize: 200,
        links: this.wjs.get('Json', 'Works'),
        cssClasses: ['galleryWorks'],
        sineYFreq: 250,
        sineYAmp: 50,
        imagesPath: this.client + 'images/',
        itemClick: this.itemClick.bind(this)
      });
      this.wjs.cssAnimationDelayOffset(this.galleryWorks.dom, 'a', 0.2, 0);
    },

    itemClick: function (item, e) {
      var options = this.wjs.extendObject({
        type: 'Element::WorkContent'
      }, item.link);
      // Relocate images.
      options.image = this.client + 'images/' + options.image;
      options.illustration = this.client + 'images/' + options.illustration;
      // Create child.
      this.galleryWorks.stage.childAdd(options);
    },

    exitWebPage: function () {
      var D3Ring = this.wjs.wexampleRainbow.D3Ring;
      D3Ring.stateSet('active', true);
      this.galleryWorks.exit();
      this.galleryTech.exit();
    }
  });
}(WjsProto));
