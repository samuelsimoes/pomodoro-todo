angular.module("Pomodoro").controller("PomodoroListsController", [
  "$scope", "$rootScope", "PomodoroLists",
  function ($scope, $rootScope, PomodoroLists) {
    var pomodoreLists = new PomodoroLists();

    $scope.pomodoroLists = pomodoreLists.models;

    pomodoreLists.fetch();

    $rootScope.$on("new-pomodoro-list-saved", function (event, pomodoreList) {
      pomodoreLists.add(pomodoreList);
    });
  }
]);
