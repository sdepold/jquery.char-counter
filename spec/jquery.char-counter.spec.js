buster.spec.expose()

describe('jquery.char-counter', function() {
  before(function() {
    this.textarea = jQuery('<textarea>').appendTo(jQuery('body'))
    this.messageContainer = jQuery('<div id="counter' + parseInt(Math.random() * 9999999) + '">').appendTo(jQuery('body'))
  })

  it("adds the counter to the view", function() {
    this.textarea.charCounter({
      messageContainer: '#' + this.messageContainer.attr('id')
    })

    expect(this.messageContainer.text()).not.toEqual('')
  })

  it("//limits the length of the inserted test by default", function() {
    console.log(this.textarea.get(0).outerHTML)

    new DaWanda.CharCounter(this.textarea, {
      messageContainer: '#' + this.messageContainer.attr('id')
    }).render()

    console.log(this.textarea.get(0).outerHTML)

    this.textarea.text(Array(200).join(''))

    for(var i = 0; i < 200; i++) {
      this.textarea.text(this.textarea.text() + '.')
      this.textarea.trigger('keyup')
    }

    console.log(this.textarea.get(0).outerHTML)

    console.log(this.messageContainer.get(0).outerHTML)
    expect(this.textarea.text().length).toEqual(140)
  })
})
