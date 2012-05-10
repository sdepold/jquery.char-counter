jquery.char-counter
===================

A jQuery plugin for counting and limiting the characters in a textarea.

## Usage

Let's assume you have a textarea with the id `user_bio` and a span with the id `user_bio_counter`. It would look like so:

    <textarea id="user_bio"></textarea>
    <span id="user_bio_counter"></span>

To limit the number of characters in the textarea and the currently available number of characters into the `span` just do:

    $('#user_bio').charCounter({
      messageContainer: '#user_bio_counter'
    })

In order to use a custom message you can just pass the parameter `message`:

    $("#user_bio").charCounter({
      messageContainer: '#user_bio_counter',
      message: 'Oh, you can only add %{count} more characters!'
    })

The magic `%{count}` token will then be automatically replaced.

You can also define the number of allowed characters either via passing `limit` or via specifying the attribute `data-char-limit`
on the textarea:

    $("#user_bio").charCounter({
      messageContainer: '#user_bio_counter',
      limit: 500
    })

    // or

    <textarea id="user_bio" data-char-limit="200"></textarea>

## License

Hereby place under MIT license.
