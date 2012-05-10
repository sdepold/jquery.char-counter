jquery.char-counter
===================

A jQuery plugin for counting and limiting the characters in a textarea.

## Usage

Let's assume you have a textarea with the id `user_bio` and a span with the id `user_bio_counter`. It would look like so:

    <textarea id="user_bio"></textarea>
    <span id="user_bio_counter"></span>

To limit the number of characters in the textarea just do:

    $('#user_bio').charCounter({
      messageContainer: '#user_bio_counter'
    })
