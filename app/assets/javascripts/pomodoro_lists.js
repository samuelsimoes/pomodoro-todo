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
        templateUrl: "tomatoes/templates/base.html",
        controller: [
          "$scope", "$rootScope", "$stateParams", "PomodoroList",
          function ($scope, $rootScope, $stateParams, PomodoroList) {
            $scope.stateParams = $stateParams;

            $scope.pomodoroList = new PomodoroList({ id: $stateParams.pomodoroListId });

            // loads the actual list running pomodoro
            $scope.pomodoroList.loadRunningPomodoro().then(function (tomato) {
              $rootScope.$broadcast("counter:start", tomato);
            });
          }
        ]
      });
  }
]);
