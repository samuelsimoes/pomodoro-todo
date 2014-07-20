angular.module("Pomodoro").factory("LongBreak", [
  "PauseEntity",
  function (PauseEntity) {
    return PauseEntity.extend({
      initialize: function () {
        this.attributes = { description: "Pausa longa" };
      },

      timeLengthInSeconds: 1500
    });
  }
]);
