angular.module("Pomodoro").controller("PomodoroListController", [
  "$scope",
  function ($scope) {
    this.destroy = function () {
      $scope.pomodoroList.destroy();
    };
  }
]);
