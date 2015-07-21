(function (WjsProto) {
  'use strict';
  WjsProto.register('WebForm', 'WexampleContact', {
    messageDefault: 'Let me a message, don\'t forget your contact.',

    initWebForm: function () {
      // Fill default message.
      this.form.elements.message.value = this.messageDefault;
      // Localize callback.
      this.messageFocusBind = this.messageFocus.bind(this);
      // Listen for focus to empty box.
      this.form.elements.message.addEventListener('focus', this.messageFocusBind);
    },

    exitWebForm: function () {
      // Ensure to remove listener.
      this.form.elements.message.removeEventListener('focus', this.messageFocusBind);
    },

    messageFocus: function (e) {
      // Remove default message.
      if (e.target.value === this.messageDefault) {
        e.target.value = '';
      }
    },

    submit: function (data) {
      // Message should ne be the default message.
      if (data.message === this.messageDefault) {
        // We don't simplify cody style,
        // other tests may come later.
        return false;
      }
      return true;
    },

    sent: function () {
      // Adding class will start animation.
      this.dom.classList.add('sent');
    },

    success: function (data) {
      var message = 'Thank you.';
      // Test response for errors.
      if (data.response.indexOf('ERR_') !== -1) {
        message = 'Something wrong happened...';
      }
      // Fill
      this.domChildGet('html').innerHTML += '<div class="status">' + message + '</div>';
    }
  });
}(WjsProto));
