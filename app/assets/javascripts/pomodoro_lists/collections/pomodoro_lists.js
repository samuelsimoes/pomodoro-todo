angular.module("Pomodoro").factory("PomodoroLists", [
  "CollectionBase", "PomodoroList",
  function (CollectionBase, PomodoroList) {
    return CollectionBase.extend({
      url: "pomodoro_lists",

      model: PomodoroList
    });
  }
]);
