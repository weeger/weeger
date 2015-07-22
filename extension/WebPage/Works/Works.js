(function (WjsProto) {
  'use strict';
  /**
   * @require Element > D3RingRainbow
   * @require Element > PageTitleBack
   * @require Element > SineGallery
   * @require Element > WorkContent
   * @require Plugin > D3WebComRotate
   */
  WjsProto.register('WebPage', 'Works', {
    links: [
      {
        title: 'Wjs',
        href: 'http://www.github.com/weeger/wjs',
        description: 'Wjs is a front end development toolkit designed to bring a new user experience to web clients, ' +
          'by increasing interactions between browser and server, supporting a full dynamic navigation with no pages reloads, ' +
          'and providing an advanced object oriented programming interface supporting plugins, keyframe rendering, and so on...',
        image: 'wjs.gif',
        illustration: 'wjs-illu.gif'
      },
      {
        title: 'French government',
        href: 'http://www.gouvernement.fr',
        description: 'I worked during four years on the french government website built with Drupal, I was the technical manager during three years. ' +
          'During this time I also worked on several websites, web applications and governmental projects of the department.',
        image: 'pm.gif',
        illustration: 'pm-illu.gif'
      },
      {
        title: 'CCBF',
        href: 'http://www.ccbf.fr',
        description: 'Created the website of the Brazil chamber of commerce in France. Drupal 7 with several features and social member area.',
        image: 'ccbf.gif',
        illustration: 'ccbf-illu.gif'
      },
      {
        title: 'Commerce guys',
        href: 'https://commerceguys.com',
        description: 'Flash based interface for Polyflam selling customized product on a Drupal Commerce website. The website is not available anymore.',
        image: 'guys.gif',
        illustration: 'guys-illu.gif'
      },
      {
        title: 'Numero Favori',
        href: 'http://www.numerofavori.com',
        description: 'Worked for Numero Favori as Drupal developer.',
        image: 'num.gif',
        illustration: 'num-illu.gif'
      },
      {
        title: 'La Locale TV',
        href: 'http://www.lalocale.com',
        description: 'Built the first version of the website during two years. Full custom PHP site with frontend and backend, graphical web design and integration, shows and employees management.',
        image: 'lalo.gif',
        illustration: 'lalo-illu.gif'
      },
      {
        title: 'Les Photographes',
        href: 'http://www.lesphotographes.org',
        description: 'Created a custom javascript interface for orders management.',
        image: 'phot.gif',
        illustration: 'phot-illu.gif'
      },
      {
        title: 'Squid.io',
        href: 'http://www.turbosquid.com/Search/Artists/weeger',
        description: 'In my spare time I\'ve spent a lot some time to do CGI. I sell some of my works on this network.',
        image: 'squid.gif',
        illustration: 'squid-illu.gif'
      },
      {
        title: 'Eli Tiunine',
        href: 'http://www.elitiunine.com',
        description: 'I worked during years for this French master painter, which is also my mother, and a lovely person. I\'ve created all the graphical communication assets and built and maintained her website.',
        image: 'tiu.gif',
        illustration: 'tiu-illu.gif'
      },
      {
        title: 'Dreamstime',
        href: 'http://www.dreamstime.com/expoz_more-popular-photos_pg1',
        description: 'I\' also selling some images on the Dreamstime network.',
        image: 'dream.gif',
        illustration: 'dream-illu.gif'
      },
      {
        title: 'Envato',
        href: 'http://themeforest.net/item/3d-tags-cloud/4377942',
        description: 'I sell some components on the envato network.',
        image: 'tag.gif',
        illustration: 'tag-illu.gif'
      },
      {
        title: 'Piscinelle',
        href: 'http://www.piscinelle.com',
        description: 'Updated an existing interface for pools ordering, using a lot of custom javascript and PHP interactions.',
        image: 'pic.gif',
        illustration: 'pic-illu.gif'
      },
      {
        title: '-W-',
        href: 'https://soundcloud.com/wexample',
        description: 'I spent some time to do electro sound experiments, I don\'t consider it as art pieces, but its enough for me to develop some skill and sensitivity. I also have a little skill at piano playing.',
        image: 'w.gif',
        illustration: 'w-illu.gif'
      }
    ],

    technologies: [
      {
        title: 'Drupal',
        description: '...',
        image: 'weeger.gif'
      },
      {
        title: 'PHP',
        description: '...',
        image: 'weeger.gif'
      },
      {
        title: 'Javascript',
        description: '...',
        image: 'weeger.gif'
      },
      {
        title: 'CSS',
        description: '...',
        image: 'weeger.gif'
      },
      {
        title: 'HTML5',
        description: '...',
        image: 'weeger.gif'
      },
      {
        title: 'Music',
        description: '...',
        image: 'weeger.gif'
      },
      {
        title: 'Graphics',
        description: '...',
        image: 'weeger.gif'
      },
      {
        title: 'Sociology',
        description: '...',
        image: 'weeger.gif'
      },
      {
        title: 'Philosophy',
        description: '...',
        image: 'weeger.gif'
      },
      {
        title: 'Philosophy',
        description: '...',
        image: 'weeger.gif'
      },
      {
        title: 'Philosophy',
        description: '...',
        image: 'weeger.gif'
      },
      {
        title: 'Philosophy',
        description: '...',
        image: 'weeger.gif'
      },
      {
        title: 'Philosophy',
        description: '...',
        image: 'weeger.gif'
      },
      {
        title: 'Philosophy',
        description: '...',
        image: 'weeger.gif'
      },
      {
        title: 'Philosophy',
        description: '...',
        image: 'weeger.gif'
      },
      {
        title: 'Philosophy',
        description: '...',
        image: 'weeger.gif'
      },
      {
        title: 'Philosophy',
        description: '...',
        image: 'weeger.gif'
      }
    ],

    optionsDefault: {
      require: {
        Element: [
          'PageTitleBack'
        ]
      },
      requireStatic: {
        Element: ['D3RingRainbow'],
        WebCom:['GithubRibbon']
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
      this.galleryWorks = this.wjs.loaders.Element.instance('SineGallery', {
        top: 50,
        left: 100,
        snapSize: 200,
        links: this.links,
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
    }
  });
}(WjsProto));
