angular.module("Pomodoro").factory("Tomato", [
  "ModelBase",
  function (ModelBase) {
    return ModelBase.extend({
      urlRoot: "tomatoes"
    });
  }
]);
