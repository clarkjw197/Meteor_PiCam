// ******************* GLOBAL SETTINGS *****************************

function redirectIfLoggedIn (ctx, redirect) {
  if (Meteor.userId()) {
    redirect('/')
  }
}

function checkLoggedIn (ctx, redirect) {
  if (Meteor.userId() != "X7RsjK7KWxBu3ejMr" && !Meteor.loggingIn()) {
    redirect('/')
  }
}
// ************************* ROUTES ********************************

var publicRoutes = FlowRouter.group({
  name: 'public',
  triggersEnter: [
    redirectIfLoggedIn
  ]
})

publicRoutes.route('/', {
  name: 'home',
  triggersEnter: [],
  action: function (params, queryParams) {
    BlazeLayout.render('layout', {template: 'home'})
  },
  triggersExit: []
})

publicRoutes.route('/public', {
  name: 'public',
  triggersEnter: [],
  action: function (params, queryParams) {
    BlazeLayout.render('layout', {template: 'public'})
  },
  triggersExit: []
})

var privateRoutes = FlowRouter.group({
  name: 'Picam',
  triggersEnter: [
    checkLoggedIn
  ]
})

privateRoutes.route('/Picam', {
  name: 'Picam',
  triggersEnter: [],
  action: function (params, queryParams) {
    BlazeLayout.render('layout', {template: 'Picam'})
  },
  subscriptions: function (params, queryParams) {
    var opts = {}
    if (queryParams.type) opts.type = queryParams.type
    this.register('test', Meteor.subscribe('test', opts))
  },
  triggersExit: []
})

privateRoutes.route('/Slides', {
  name: 'Slides',
  triggersEnter: [],
  action: function (params, queryParams) {
    BlazeLayout.render('layout', {template: 'Slides'})
  },
  triggersExit: []
})

