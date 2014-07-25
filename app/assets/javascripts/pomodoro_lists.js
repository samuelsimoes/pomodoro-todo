//= require_tree ./pomodoro_lists
//= require_tree ./tomatoes

angular.module("PomodoroApp").config([
  "$stateProvider",
  function ($stateProvider) {
    $stateProvider.
      state("pomodoro_lists", {
        url: "/pomodoro_lists",
        templateUrl: "pomodoro_lists/templates/base.html"
      }).
      state("pomodoro_lists.show", {
        url: "/:pomodoroListId",
        templateUrl: "tomatoes/templates/base.html"
      });
  }
]);
