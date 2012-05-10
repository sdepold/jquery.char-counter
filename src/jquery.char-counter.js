(function($) {
  "use strict"

  $.fn.charCounter = function(options) {
    options = $.extend({
      limit: 140,
      messageContainer: '#messageContainer'
      message: "%{count} chars left."
    }, options || {})

    var $element = $(this)

    $element.keyup(function() {
      checkTextLength($element, options)
    })
  }

  var checkTextLength = function($element, options) {
    if($element.text().length > options.limit) {
      $element.text($element.text().substring(0, options.limit))
    }
  }

  var updateMessageContainer = function($element, options) {
    var $messageContainer = $(options.messageContainer)
      , leftCharacters    = options.limit - $element.text().length
      , text              = options.message.replace('${count}', ((leftCharacters < 0) ? 0 : leftCharacters))

    $messageContainer.text(text)
  }
})(jQuery)
