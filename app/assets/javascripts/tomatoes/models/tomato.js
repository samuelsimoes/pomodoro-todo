angular.module("Pomodoro").factory("Tomato", [
  "ModelBase",
  function (ModelBase) {
    return ModelBase.extend({
      timeLengthInSeconds: 1500,

      urlRoot: "tomatoes",

      runTimeInSeconds: function () {
        var startTimeInMs = new Date(this.attributes.started_at).getTime(),
            nowInMs = new Date().getTime();

        return (nowInMs - startTimeInMs) / 1000;
      },

      leftTimeInSeconds: function () {
        return (this.timeLengthInSeconds - this.runTimeInSeconds());
      },

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
