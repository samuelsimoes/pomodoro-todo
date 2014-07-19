//= require jquery
//= require jquery_ujs
//= require angular
//= require_tree ./filters

angular.module("Pomodoro", []);
angular.module("PomodoroApp", ["Pomodoro", "DurationFilter"]).config([
  "$httpProvider",
  function ($httpProvider) {
    $httpProvider.defaults.headers.common["X-CSRF-Token"] =
      $("meta[name=csrf-token]").attr("content");

    $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
  }
]);
