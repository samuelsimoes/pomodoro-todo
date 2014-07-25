angular.module("Pomodoro").controller("PomodoroListsController", [
  "$scope", "PomodoroLists",
  function ($scope, PomodoroLists) {
    var pomodoreLists = new PomodoroLists();

    $scope.pomodoroLists = pomodoreLists.models;

    pomodoreLists.fetch();
  }
]);
