angular.module("Pomodoro").factory("CounterEntity", [
  "ModelBase",
  function (ModelBase) {
    return ModelBase.extend({
      runTimeInSeconds: function () {
        var startedParsed;

        if (this.attributes.started_at instanceof Date) {
          startedParsed = this.attributes.started_at;
        } else {
          startedParsed = new Date(this.attributes.started_at);
        }

        return ((new Date().getTime()) - (startedParsed.getTime())) / 1000;
      },

      leftTimeInSeconds: function () {
        return (this.timeLengthInSeconds - this.runTimeInSeconds());
      }
    });
  }
]);
