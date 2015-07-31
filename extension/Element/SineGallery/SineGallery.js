(function (WjsProto) {
  'use strict';
  /**
   * @require Element > Clip
   * @require Element > SineGalleryItem
   * @require JsClassStatic > ScrollManager
   * @require Formula > ScrollManagerValue
   */
  WjsProto.register('Element', 'SineGallery', {
    classExtends: 'Element\\D3Container',
    optionsDefault: {
      dom: true,
      width: 1000,
      direction: 1,
      snapSize: 50,
      snapMargin: 20,
      children: [
        // Custom type.
        {
          type: 'Element::D3Container',
          parentShortcut: 'D3Container'
        }
      ],
      startMargin: 300,
      scrollPositionX: {
        formula: 'ScrollManagerValue',
        direction: 'XPercent'
      },
      links: {},
      sineYFreq: 1,
      sineYAmp: 0,
      sineZFreq: 1,
      sineZAmp: 0
    },
    variables: {
      sineWidth: 0
    },

    initElement: function () {
      this.wjs.ScrollManager.scrollEnable('X', 2);
      this.wjs.ScrollManager.mouseWheelEnable('X');
      this.wjs.ScrollManager.mouseDriftEnable('X', 200, this.method('callbacks.domListen.mouseDrift'));
      // Create items.
      for (var i = 0, item; item = this.links[i++];) {
        this.D3Container.childAdd({
          type: 'Element::SineGalleryItem',
          width: this.snapSize,
          height: this.snapSize,
          image: this.imagesPath + item.image,
          title: item.title,
          link: item,
          click: this.itemClick
        });
      }
      this.domListen(this.wjs.window, 'mousewheel', 'mouseWheel');
    },

    exitElement: function () {
      this.wjs.ScrollManager.scrollDisable('X');
      this.wjs.ScrollManager.mouseWheelDisable('X');
      this.wjs.ScrollManager.mouseDriftDisable(this.method('callbacks.domListen.mouseDrift'));
    },

    renderReset: function () {
      this.sineWidth = (this.snapSize + this.snapMargin) * this.D3Container.children.length;
      return this.__super('renderReset', arguments);
    },

    callbacks: {
      domListen: {
        mouseDrift: function (position) {
          this.wjs.window.scrollTo(this.wjs.ScrollManager.scrollX + (position > (this.wjs.window.innerWidth / 2) ? 3 : -3), this.wjs.ScrollManager.scrollY);
        }
      }
    }
  });
}(WjsProto));
