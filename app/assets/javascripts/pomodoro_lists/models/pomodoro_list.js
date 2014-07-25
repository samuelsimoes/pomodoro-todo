angular.module("Pomodoro").factory("PomodoroList", [
  "ModelBase",
  function (ModelBase) {
    return ModelBase.extend({
      urlRoot: "pomodoro_lists"
    });
  }
]);
