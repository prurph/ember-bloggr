App = Ember.Application.create(); // Ember application instance

// Router.map is a method that takes a function in which we define all the URLs
// for the application
App.Router.map(function() {
  this.resource("about");
  this.resource("posts", function() {
    this.resource("post", { path: ":post_id"}); // specify how post_id goes into URL
  });
});

// route specifies which model a template should be backed by
App.PostsRoute = Ember.Route.extend({
  // routes have a method called model
  model: function() {
    return posts;
  }
});

// when we go to /posts/1 params has ":post_id" from path: declaration above
// so just find the post by the "id" property that matches params.post_id
App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return posts.findBy("id", params.post_id);
  }
});

// in Ember, controller is object that stores application state and responds to
// events from template
App.PostController = Ember.ObjectController.extend({
  isEditing: false, // not persistent (so don't save on model; if refresh turn off edit)

  actions: {
    edit: function() {
      this.set("isEditing", true);
    },

    doneEditing: function() {
      this.set("isEditing", false);
    }
  }
});

Ember.Handlebars.helper("format-date", function(date) {
  return moment(date.fromNow());
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
