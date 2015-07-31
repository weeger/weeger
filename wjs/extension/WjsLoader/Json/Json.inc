<?php

namespace Wjs\Loader;

use \Wjs\Loader;

/**
 * Transmit json to JS object.
 */
class Json extends JsObject {

  function extensionAdd($name, $value) {
    if (is_file($value)) {
      $value = json_decode(file_get_contents($value));
    }
    return parent::extensionAdd($name, $value);
  }

  function scanFolderItem($directory, $item, $globalData) {
    if (is_file($directory . $item)) {
      // Get file info.
      $info = pathinfo($directory . $item);
      // Add data.
      $this->wjs->extensionAdd($this->type, $info['filename'], $directory . $item);
    }
  }
}
