angular.module("Pomodoro").controller("PomodoroListsController", [
  "PomodoroLists", "PomodoroList",
  function (PomodoroLists, PomodoroList) {
    var pomodoreLists = new PomodoroLists();

    this.pomodoroLists = pomodoreLists.models;

    this.newList = function () {
      pomodoreLists.add(new PomodoroList());
    };

    pomodoreLists.fetch();
  }
]);
