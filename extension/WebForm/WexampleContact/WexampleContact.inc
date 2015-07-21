<?php

namespace Wjs\Loader\WebForm;

class WexampleContact extends Form {
  function submit($post) {
    if (isset($post['message'])) {
      if (time() - $this->formStamp < 10) {
        return 'WEXAMPLE_CONTACT_ERR_TOO_FAST';
      }
      // Use Wjs to load internal function.
      $this->wjs->import('PhpMethod', 'SimpleMail');
      // Send a mail.
      \Wjs\PhpMethod\simpleMail('contact@wexample.com', 'romain.weeger@gmail.com', '[wexample.com] New message', $post['message']);
    }
    return parent::submit($post);
  }
}
