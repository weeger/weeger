(function (WjsProto) {
  'use strict';
  /**
   * Place a normal script when document is ready.
   * @require JsMethod > eventKeyCode
   */
  WjsProto.ready(function () {
    // You can place extra javascript here
    // after the main site initialisation.
    // You can also add you scripts by the
    // classic way (outside this function).
    var wjs = this;
    window.addEventListener('keyup', function (e) {
      // Press F12
      if (wjs.eventKeyCode(e) === 123) {
        // Display welcome.
        wjs.use('JsScript', 'WjsWelcome');
      }
    });
  });
}(WjsProto));
