App = Ember.Application.create(); // Ember application instance

// Router.map is a method that takes a function in which we define all the URLs
// for the application
App.Router.map(function() {
  this.resource("about");
});
