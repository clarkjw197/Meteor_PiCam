var typeStore = new ReactiveVar()

Template.dashboard.onCreated(function () {
  var tpl = this
  tpl.autorun(function () {
    var opts = {}
    var type = typeStore.get()
    if (type) opts.type = type
    tpl.subscribe('test', opts)
  })
})

Template.dashboard.events({
  'click [data-type]': function (evt, tpl) {
    typeStore.set(tpl.$(evt.currentTarget).data('type'))
  }
})

Template.registerHelper('groupRoutes', function () {
  FlowRouter.watchPathChange()
  var groupName = FlowRouter.current().route.group.name
  return _.filter(FlowRouter._routes, function (route) {
    return route.group.name === groupName
  })
})

Template.registerHelper('testDocs', function () {
  return Test.find()
})

Accounts.onLogin(function () {
  if (FlowRouter.current().route.group.name === 'public') {
    FlowRouter.go('dashboard')
  }
})

Tracker.autorun(function () {
  if (!Meteor.userId()) {
    FlowRouter.go('home')
  }
})

Template.video.onRendered(function () {
    var video = document.querySelector("#videoElement");
 
              navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
 
              if (navigator.getUserMedia) {       
                navigator.getUserMedia({video: true}, handleVideo, videoError);
              }
 
              function handleVideo(stream) {
                video.src = window.URL.createObjectURL(stream);
              }
 
              function videoError(e) {
                  // do something
              }

});