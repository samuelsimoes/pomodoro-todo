//= require_tree ./pomodoro_lists
//= require_tree ./pomodoros

angular.module("PomodoroApp").config([
  "$stateProvider", "$urlRouterProvider",
  function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/pomodoro_lists");

    $stateProvider.
      state("pomodoro_lists", {
        url: "/pomodoro_lists",
        templateUrl: "pomodoro_lists/templates/base.html"
      }).
      state("pomodoro_lists.show", {
        url: "/:pomodoroListId",
        templateUrl: "pomodoros/templates/base.html",
        controller: [
          "$scope", "$rootScope", "$stateParams", "PomodoroList",
          function ($scope, $rootScope, $stateParams, PomodoroList) {
            $scope.stateParams = $stateParams;

            $scope.pomodoroList = new PomodoroList({ id: $stateParams.pomodoroListId });

            // loads the actual list running pomodoro
            $scope.pomodoroList.loadRunningPomodoro().then(function (pomodoro) {
              $rootScope.$broadcast("counter:start", pomodoro);
            });
          }
        ]
      });
  }
]);
