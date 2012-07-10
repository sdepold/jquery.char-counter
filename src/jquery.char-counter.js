(function($) {
  $.fn.charCounter = function(options) {
    var $element = $(this)

    options = $.extend({
      limit: $element.data('char-limit') || $element.attr('maxlength') || 140,
      messageContainer: '#messageContainer',
      message: "%{count} chars left."
    }, options || {})

    var getMessageContainer = function() {
      var container = $(options.messageContainer)

      if(container.length === 0) {
        options.messageContainer = container = jQuery('<div>').insertAfter($element)
      }

      return container
    }

    var checkTextLength = function() {
      var text = $element.val()
      if(text.length > options.limit) {
        $element.val(text.substring(0, options.limit))
      }
    }

    var updateMessageContainer = function() {
      var leftCharacters    = options.limit - $element.val().length
        , text              = options.message.replace('%{count}', ((leftCharacters < 0) ? 0 : leftCharacters))

      getMessageContainer().text(text)
    }

    var evaluate = function () {
      checkTextLength()
      updateMessageContainer()
    }

    $element.keyup(evaluate)
    evaluate()
  }
})(jQuery)
