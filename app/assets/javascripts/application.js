//= require jquery
//= require jquery_ujs
//= require jquery.ui
//= require angular
//= require angular.sortable
//= require angular.ui-router
//= require model_collection
//= require angular-rails-templates
//= require_tree ./filters

angular.module("Pomodoro", []);
angular.module("PomodoroApp", [
  "Pomodoro",
  "ModelCollection",
  "ui.sortable",
  "DurationFilter",
  "templates",
  "ui.router"
]).config([
  "$httpProvider",
  function ($httpProvider) {
    $httpProvider.defaults.headers.common["X-CSRF-Token"] =
      $("meta[name=csrf-token]").attr("content");

    $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
  }
]);
