buster.spec.expose()

describe('jquery.char-counter', function() {
  before(function() {
    this.container = jQuery('<div>').appendTo(jQuery('body'))


    this.textarea = jQuery('<textarea>').appendTo(this.container)
    this.messageContainer = jQuery('<div id="counter' + parseInt(Math.random() * 9999999) + '">').appendTo(this.container)
  })

  after(function() {
    this.container.remove()
  })

  it("adds the counter to the view", function() {
    this.textarea.charCounter({
      messageContainer: '#' + this.messageContainer.attr('id')
    })

    expect(this.messageContainer.text()).toEqual('140 chars left.')
  })

  it("allows overriding the limit", function() {
    this.textarea.charCounter({
      messageContainer: '#' + this.messageContainer.attr('id'),
      limit: 200
    })

    expect(this.messageContainer.text()).toEqual('200 chars left.')
  })

  it("reads the data-char-limit attribute of a dom element for the actual limit", function() {
    this.textarea.attr('data-char-limit', 100)
    this.textarea.charCounter({
      messageContainer: '#' + this.messageContainer.attr('id')
    })

    expect(this.messageContainer.text()).toEqual('100 chars left.')
  })

  it("reads the maxlength attributes if set", function() {
    this.textarea
      .attr('data-char-limit', null)
      .attr('maxlength', 200)
      .charCounter({
        messageContainer: this.messageContainer
      })

    expect(this.messageContainer.text()).toEqual('200 chars left.')
  })

  it("ignores the data-char-limit attribute if the limit is passed", function() {
    this.textarea.attr('data-char-limit', 100)
    this.textarea.charCounter({
      messageContainer: '#' + this.messageContainer.attr('id'),
      limit: 50
    })

    expect(this.messageContainer.text()).toEqual('50 chars left.')
  })

  it("decreases the possible chars by 1 if one character was added", function() {
    this.textarea.charCounter({
      messageContainer: '#' + this.messageContainer.attr('id')
    })

    this.textarea.val('.')
    this.textarea.trigger('keyup')

    expect(this.messageContainer.text()).toEqual('139 chars left.')
  })

  it("limits the length of the inserted test", function() {
    this.textarea.charCounter({
      messageContainer: '#' + this.messageContainer.attr('id')
    })

    for(var i = 0; i < 200; i++) {
      this.textarea.val(this.textarea.val() + '.')
      this.textarea.trigger('keyup')
    }

    // expect(this.)
    expect(this.textarea.val().length).toEqual(140)
    expect(this.messageContainer.text()).toEqual('0 chars left.')
  })

  it("correctly replaces char counter in custom message", function() {
    this.textarea.charCounter({
      messageContainer: '#' + this.messageContainer.attr('id'),
      message: 'Noch %{count} Zeichen verfügbar!'
    })
    expect(this.messageContainer.text()).toEqual('Noch 140 Zeichen verfügbar!')
  })

  it("=>creates a message container if non was passed", function() {
    this.textarea.charCounter()

    expect(jQuery('*', this.container).length).toEqual(3)
  })
})
