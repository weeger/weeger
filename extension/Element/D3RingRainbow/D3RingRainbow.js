(function (WjsProto) {
  'use strict';
  /**
   * @require Element > Stage
   * @require Element > D3Clip
   * @require Element > D3ContainerRing
   * @require Formula > ScreenSize
   * @require Plugin > D3ClipTarget
   */
  WjsProto.register('Element', 'D3RingRainbow', {
    // Extends a standard clip (centered div).
    classExtends: 'Element\\Clip',
    // Set options, can be overridden on creation.
    optionsDefault: {
      // Define number of bars.
      barsLength: 24,
      children: [
        // Create 3D ring container.
        {
          // Ring type.
          type: 'Element::D3RingRainbow.Ring',
          parentShortcut: 'D3Ring',
          // Define radius.
          radius: 300
        }
      ]
    },

    options: {
      barsLength: 24
    },

    initElement: function () {
      // Save a global reference.
      this.wjs.wexampleRainbow = this;
      this.__super('initElement', arguments);
    },

    // Contain sub classes definition.
    bundle: {
      // Manage children clips.
      Ring: {
        // Uses a standard object.
        classExtends: 'Element\\D3ContainerRing',

        states: {
          active: null
        },

        /**
         * Executed when element construction is completed.
         * @require Formula > MousePositionFromCenter
         */
        initElement: function () {
          this.__super('initElement', arguments);
          // Create a target plugin.
          this.pluginTarget = this.wjs.loaders.Plugin.instance('D3ClipTarget');
          // Create one child per bar.
          for (var i = 0; i < this.parent.barsLength; i++) {
            this.childAdd({
              type: 'Element::D3RingRainbow.Bar'
            });
          }
          this.stateSet('active', true);
        },

        /**
         * Executed before element destruction.
         */
        exitElement: function () {
          var self = this;
          // Start animation.
          this.animate({
            rotateH: 0,
            radius: 0
          }, {
            duration: 2000,
            easing: [0.7, 0, 0, 1],
            complete: function () {
              self.exitElementComplete();
            }
          });
          return false;
        },

        callbacks: {
          stateSet: {
            active: function (value) {
              if (value) {
                this.pluginTarget.targetX = {formula: 'MousePositionFromCenter', direction: 'X'};
                this.pluginTarget.targetY = {formula: 'MousePositionFromCenter', direction: 'Y'};
                this.dom.classList.add('enabled');
                this.dom.classList.remove('disabled');
              }
              else {
                this.pluginTarget.targetX = 0;
                this.pluginTarget.targetY = 0;
                this.dom.classList.add('disabled');
                this.dom.classList.remove('enabled');
              }
            }
          }
        }
      },

      // Class for one bar.
      Bar: {
        // Extend normal clip.
        classExtends: 'Element\\D3Clip',
        optionsDefault: {
          // Default size
          width: 10,
          height: 100
        },

        states: {
          active: false,
          stretched: false
        },

        initElement: function () {
          this.__super('initElement', arguments);
          // Create children.
          var num = this.parent.parent.barsLength, frequency = 5 / num,
            index = this.parent.children.indexOf(this);
          // Fast rainbow color;
          this.dom.style.background =
            this.color = 'rgb(' +
              Math.floor(Math.sin(frequency * index + 0) * (127) + 128) + ',' +
              Math.floor(Math.sin(frequency * index + 2) * (127) + 128) + ',' +
              Math.floor(Math.sin(frequency * index + 4) * (127) + 128) +
              ')';
          this.pluginAdd(this.parent.pluginTarget);
          // Connect active state to parent active state.
          this.stateConnect(this.parent, 'active', 'active', true);
        },

        callbacks: {
          domListen: {
            onMouseOver: function () {
              this.stateSet('stretched', true);
            }
          },
          stateSet: {
            active: function (value) {
              if (value) {
                this.domListen(this.dom, 'mouseover', 'onMouseOver');
              }
              else {
                this.domForget(this.dom, 'mouseover', 'onMouseOver');
              }
            },
            stretched: function (value) {
              var self = this;
              if (value) {
                this.height = 150;
                this.animate({
                  height: 100
                }, {
                  duration: 6000,
                  easing: [0.7, 0, 0, 1],
                  complete: function () {
                    self.stateSet('stretched', false);
                  }
                });
              }
              else {
                this.height = 100;
              }
            }
          }
        }
      }
    }
  });
}(WjsProto));
