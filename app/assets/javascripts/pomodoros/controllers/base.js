angular.module("Pomodoro").controller("PomodorosBaseController", [
  "$scope", "$rootScope", "$stateParams", "PomodoroList",
  function ($scope, $rootScope, $stateParams, PomodoroList) {
    $scope.stateParams = $stateParams;

    $scope.pomodoroList = new PomodoroList({ id: $stateParams.pomodoroListId });

    // loads the actual list running pomodoro
    $scope.pomodoroList.loadRunningPomodoro().then(function (pomodoro) {
      $rootScope.$broadcast("counter:start", pomodoro);
    });
  }
]);
