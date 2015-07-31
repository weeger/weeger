(function (WjsProto) {
  'use strict';
  /**
   * Simulate scroll for interactive management.
   * @require JsClassStatic > MousePositionListener
   */
  WjsProto.register('JsClassStatic', 'ScrollManager', {
    scrollX: null,
    scrollY: null,
    scrollSpeedX: false,
    scrollSpeedY: false,
    mouseDriftListeners: [],

    __construct: function () {
      this.windowScrollBind = this.windowScroll.bind(this);
      this.windowResizeBind = this.windowResize.bind(this);
      this.wjs.window.addEventListener('scroll', this.windowScrollBind);
      this.wjs.window.addEventListener('resize', this.windowResizeBind);
      this.mouseWheelX = function (e) {
        this.wjs.window.scrollTo(this.wjs.ScrollManager.scrollX + e.deltaY, this.wjs.ScrollManager.scrollY);
      }.bind(this);
      this.mouseMoveDriftOverBind = this.mouseMoveDriftOver.bind(this);
      this.mouseMoveDriftIntervalBind = this.mouseMoveDriftInterval.bind(this);
    },

    __destruct: function () {
      this.wjs.window.removeEventListener('scroll', this.windowScrollBind);
      this.wjs.window.removeEventListener('resize', this.windowResizeBind);
    },

    scrollEnable: function (direction, speed) {
      var domName = 'domScroll' + direction;
      if (!this[domName]) {
        var domScroll = this.wjs.document.createElement('div'), style = domScroll.style;
        this.wjs.document.body.appendChild(domScroll);
        style.position = 'absolute';
        style.visibility = 'hidden';
        style.top =
          style.left = '0';
        // Only created once.
        this[domName] = domScroll;
      }
      // Set speed.
      this.scrollParam(direction, speed);
      // Refresh style.
      this.scrollRefresh(direction);
    },

    scrollDisable: function (direction) {
      var domName = 'domScroll' + direction;
      if (this[domName]) {
        this[domName].parentNode.removeChild(this[domName]);
        delete this[domName];
      }
    },

    scrollParam: function (direction, speed) {
      this['scrollSpeed' + direction] = speed;
      this.scrollRefresh(direction);
    },

    scrollRefresh: function (direction) {
      var style = this['domScroll' + direction].style;
      // Define width / height.
      style[direction === 'X' ? 'width' : 'height'] = (this.wjs.window.innerWidth * this['scrollSpeed' + direction]) + 'px';
      // Need at least one pixel to be active.
      style[direction === 'X' ? 'height' : 'width'] = '1px';
    },

    scrollGet: function (direction) {
      var method = 'scroll' + direction;
      return this.wjs.document.body[method] || this.wjs.document.documentElement[method];
    },

    mouseWheelEnable: function (direction) {
      if (direction === 'X') {
        this.wjs.window.addEventListener('mousewheel', this.mouseWheelX);
      }
    },

    mouseWheelDisable: function (direction) {
      if (direction === 'X') {
        this.wjs.window.removeEventListener('mousewheel', this.mouseWheelX);
      }
    },

    mouseDriftEnable: function (direction, innerLimit, callback) {
      // Add a listener the first time.
      if (!this.mouseDriftListeners.length) {
        this.wjs.window.addEventListener('mouseover', this.mouseMoveDriftOverBind);
      }
      this.mouseDriftListeners.push({direction: direction, limit: innerLimit, callback: callback});
    },

    mouseMoveDriftOver: function (e) {
      e.target.addEventListener('mouseout', this.mouseMoveDriftOut.bind(this));
      this.mouseMoveDriftInterval();
    },

    mouseMoveDriftOut: function () {
      this.wjs.window.clearInterval(this.mouseMoveDriftTe);
    },

    mouseMoveDriftInterval: function () {
      for (var i = 0, value, item; item = this.mouseDriftListeners[i++];) {
        value = this.wjs.MousePositionListener['client' + item.direction];
        // Min position.
        if (value < item.limit ||
          // Max position.
          value > (this.wjs.window['inner' + (item.direction === 'X' ? 'Width' : 'Height')] - item.limit)) {
          // Launch callback.
          item.callback(value);
        }
      }
      this.mouseMoveDriftTe = this.wjs.window.setTimeout(this.mouseMoveDriftIntervalBind, 10);
    },

    mouseDriftDisable: function (callback) {
      for (var i = 0, item; item = this.mouseDriftListeners[i++];) {
        if (item.callback === callback) {
          this.wjs.arrayDeleteItem(this.mouseDriftListeners, item);
        }
      }
      if (!this.mouseDriftListeners.length) {
        this.wjs.window.removeEventListener('mouseover', this.mouseMoveDriftOverBind);
      }
    },

    windowResize: function () {
      if (this.domScrollX) {
        this.scrollRefresh('X');
      }
      if (this.domScrollY) {
        this.scrollRefresh('Y');
      }
    },

    windowScroll: function () {
      this.scrollX = this.scrollGet('Left');
      this.scrollXPercent = this.scrollX / this.wjs.window.innerWidth;
      this.scrollY = this.scrollGet('Top');
      this.scrollYPercent = this.scrollY / this.wjs.window.innerHeight;
      WjsProto.trigger('ScrollManagerChange', [this]);
    }
  });
}(WjsProto));
