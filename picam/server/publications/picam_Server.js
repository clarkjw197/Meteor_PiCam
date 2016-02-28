Meteor.publish('picam', function (opts) {
  var match = {
    type: Match.Optional(String)
  }
  if (!Match.test(opts, match)) return this.ready()
  return Picam.find(opts)
})
