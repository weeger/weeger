(function (WjsProto) {
  'use strict';
  /**
   */
  WjsProto.register('Element', 'WorkContent', {
    classExtends: 'Element\\Clip',

    initElement: function () {
      this.domListen(this.dom.getElementsByClassName('bg')[0], 'mouseup', 'domClick');
    },

    exitElement: function () {
      this.domForget(this.dom.getElementsByClassName('bg')[0], 'mouseup', 'domClick');
    },

    callbacks: {
      domListen: {
        domClick: function () {
          this.exit();
        }
      }
    }
  });
}(WjsProto));
