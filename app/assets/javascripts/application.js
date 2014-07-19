//= require jquery
//= require jquery_ujs
//= require angular
//= require model_collection
//= require_tree ./filters

angular.module("Pomodoro", []);
angular.module("PomodoroApp", ["Pomodoro", "ModelCollection", "DurationFilter"]).config([
  "$httpProvider",
  function ($httpProvider) {
    $httpProvider.defaults.headers.common["X-CSRF-Token"] =
      $("meta[name=csrf-token]").attr("content");

    $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
  }
]);
