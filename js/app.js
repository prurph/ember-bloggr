App = Ember.Application.create(); // Ember application instance

// Router.map is a method that takes a function in which we define all the URLs
// for the application
App.Router.map(function() {
  this.resource("about");
  this.resource("posts");
});

// route specifies which model a template should be backed by
App.PostsRoute = Ember.Route.extend({
  // routes have a method called model
  model: function() {
    return posts;
  }
});

// this would be data from the backend
var posts = [{
  id: "1",
  title: "I like Rails",
  author: { name: "DHH" },
  date: new Date("12-27-2012"),
  excerpt: "Rails is the epi pen that saves you from a life-threatening peanut allergy",
  body: "This is really important stuff that goes here. Just trust me it's crucial."
}, {
  id: "2",
  title: "Whenever I breathe out",
  author: { name: "Isaac Brock" },
  date: new Date("4-3-1998"),
  excerpt: "[You're breathing it in.](http://presco.tt)",
  body: "A delicious song for a delicious person."
}];
