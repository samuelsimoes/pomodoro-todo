//= require jquery
//= require jquery_ujs
//= require handlebars
//= require ember
//= require ember-data
//= require_tree ./templates

// setup
window.App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true
});

window.App.ApplicationAdapter = DS.RESTAdapter.extend({
  // underscored endpoint urls
  pathForType: function(type) {
    var underscored = Ember.String.underscore(type);
    return Ember.String.pluralize(underscored);
  }
});

// for underscored attributes in server JSON
window.App.ApplicationSerializer = DS.JSONSerializer;

window.App.Store = DS.Store.extend({
  adapter: "App.ApplicationAdapter"
});

// routes
window.App.Router.map(function () {
  this.resource("pomodoro_lists", function () {
    this.resource("tomatoes");
    this.resource("pomodoro_list", { path: "/:pomodoro_list_id" });
  });
});

window.App.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo("pomodoro_lists");
  }
});

// models
window.App.Tomato = DS.Model.extend({
  description: DS.attr("string")
});

window.App.PomodoroList = DS.Model.extend({
  title: DS.attr("string"),
  tomatoes: DS.hasMany("tomato")
});

// routers
window.App.PomodoroListsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("pomodoro_list");
  }
});

// views
window.App.PomodoroListLinkView = Ember.View.extend({
  templateName: "pomodoro_list_link",

  tagName: "div",

  classNames: ["pomodoro-list-link"],

  classNameBindings: ["innerLink.active:active"]
});
