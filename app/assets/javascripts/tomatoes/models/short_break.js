angular.module("Pomodoro").factory("ShortBreak", [
  "PauseEntity",
  function (PauseEntity) {
    return PauseEntity.extend({
      initialize: function () {
        this.attributes = { description: "Pausa curta" };
      },

      timeLengthInSeconds: 300
    });
  }
]);
