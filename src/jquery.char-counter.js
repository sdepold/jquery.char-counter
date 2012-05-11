(function($) {
  $.fn.charCounter = function(options) {
    var $element = $(this)

    options = $.extend({
      limit: $element.attr('data-char-limit') || 140,
      messageContainer: '#messageContainer',
      message: "%{count} chars left."
    }, options || {})


    $element.keyup(function() {
      checkTextLength($element, options)
      updateMessageContainer($element, options)
    })

    checkTextLength($element, options)
    updateMessageContainer($element, options)
  }

  var checkTextLength = function($element, options) {
    var text = $element.val()
    if(text.length > options.limit) {
      $element.val(text.substring(0, options.limit))
    }
  }

  var updateMessageContainer = function($element, options) {
    var $messageContainer = $(options.messageContainer)
      , leftCharacters    = options.limit - $element.val().length
      , text              = options.message.replace('%{count}', ((leftCharacters < 0) ? 0 : leftCharacters))

    $messageContainer.text(text)
  }
})(jQuery)
