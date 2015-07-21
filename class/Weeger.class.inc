<?php

require_once 'wjs/php/website.inc';

use Wjs\Website;
use Wjs\Page;

class Weeger extends Website {
  // We don't succeed to use SetEnv in production.
  var $envDefault = 'prod';
  // Add global summary.
  var $pageSummary = array(
    'Home',
    'Introduction',
    'Works',
    'Contact',
  );
  var $extensionGlobal = array(
    'JsClassStatic' => array(
      // Allow keyboard navigation.
      'webPageKeyboardChange'
    )
  );
  var $pageAliases = array(
    '[root]'       => 'Home',
    'introduction' => 'Introduction',
    'contact'      => 'Contact',
    'works'        => 'Works',
  );
  // Add global libraries.
  var $pageLibraries = array(
    'Favicon' => array(
      'path' => 'theme/favicon/'
    )
  );
}
