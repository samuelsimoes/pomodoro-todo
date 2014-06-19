//= require jquery
//= require jquery_ujs
//= require angular

angular.module("Pomodoro", []);
angular.module("PomodoroApp", ["Pomodoro"]).config([
  "$httpProvider",
  function ($httpProvider) {
    $httpProvider.defaults.headers.common["X-CSRF-Token"] =
      $("meta[name=csrf-token]").attr("content");
  }
]);
