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
  // Create aliases for pages.
  var $pageAliases = array(
    '[root]'       => 'Home',
    'introduction' => 'Introduction',
    'contact'      => 'Contact',
    'works'        => 'Works',
  );
  // Load extensions for all website.
  var $extensionGlobal = array(
    'JsClassStatic' => array(
      // Allow keyboard navigation.
      'webPageKeyboardChange'
    ),
    'WebCom'        => array(
      'GithubRibbon'
    )
  );

  // Add global libraries.
  var $pageLibraries = array(
    'Favicon' => array(
      'path' => 'theme/favicon/'
    )
  );
}
