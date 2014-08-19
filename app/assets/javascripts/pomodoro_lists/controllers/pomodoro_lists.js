angular.module("Pomodoro").controller("PomodoroListsController", [
  "PomodoroLists", "PomodoroList", "$scope", "$state",
  function (PomodoroLists, PomodoroList, $scope, $state) {
    var pomodoreLists = new PomodoroLists();

    this.pomodoroLists = pomodoreLists.models;

    this.newList = function () {
      pomodoreLists.add(new PomodoroList());
    };

    pomodoreLists.fetch();

    // return to index when the current viewed pomodoro list is exclued
    $scope.$on("pomodoro-list-deleted", function (evt, pomodoroList) {
      if (pomodoroList.attributes.id == $state.params.pomodoroListId) {
        $state.go("pomodoro_lists");
      }
    });
  }
]);
