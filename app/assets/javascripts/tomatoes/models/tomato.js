angular.module("Pomodoro").factory("Tomato", [
  "CounterEntity",
  function (CounterEntity) {
    return CounterEntity.extend({
      timeLengthInSeconds: 1500,

      urlRoot: "tomatoes",

      start: function () {
        return this.save(null, {
          url: this.url() + "/start"
        });
      },

      stop: function () {
        return this.save(null, {
          url: this.url() + "/stop"
        });
      },

      cancel: function () {
        return this.save(null, {
          url: this.url() + "/cancel"
        });
      },

      running: function () {
        return (this.attributes.started_at && !this.attributes.finished_at);
      }
    });
  }
]);
