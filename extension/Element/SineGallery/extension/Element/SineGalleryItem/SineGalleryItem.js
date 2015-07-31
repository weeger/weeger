(function (WjsProto) {
  'use strict';
  /**
   * @require Element > D3Clip
   */
  WjsProto.register('Element', 'SineGalleryItem', {
    classExtends: 'Element\\D3Clip',

    initElement: function () {
      var itemIndex = this.parent.children.indexOf(this);
      // Save once.
      this.sineGallery = this.parent.parent;
      this.itemIndex = itemIndex;
      this.domClickBind = this.domClick.bind(this);
      if (this.click) {
        this.dom.addEventListener('click', this.domClickBind);
      }
    },

    exitElement: function () {
      if (this.click) {
        this.dom.removeEventListener('click', this.domClickBind);
      }
    },

    domClick: function (e) {
      this.click(this, e);
    },

    renderReset: function () {
      var renderData = this.__super('renderReset', arguments),
        sineGallery = this.sineGallery,
        itemIndex = this.itemIndex,
        gap = sineGallery.snapSize + sineGallery.snapMargin,
        scrollTo = (sineGallery.startMargin * 2) - (sineGallery.sineWidth - gap),
        scrollPosition = sineGallery.variableGet('scrollPositionX');
      if (sineGallery.direction < 0) {
        scrollPosition = 1 - scrollPosition;
      }
      // Find x position without sine deformation.
      renderData.left += -sineGallery.startMargin + (itemIndex * gap) + (scrollTo * scrollPosition);
      renderData.top += -Math.sin(renderData.left / sineGallery.sineYFreq) * sineGallery.sineYAmp;
      return renderData;
    }
  });
}(WjsProto));
