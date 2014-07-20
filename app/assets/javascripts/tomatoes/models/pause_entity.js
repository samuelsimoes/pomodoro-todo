angular.module("Pomodoro").factory("PauseEntity", [
  "CounterEntity", "$q",
  function (CounterEntity, $q) {
    return CounterEntity.extend({
      isRunning: false,

      start: function () {
        this.isRunning = true;
        this.attributes.started_at = new Date();
        return this.defaultPromise();
      },

      stop: function () {
        this.isRunning = false;
        return this.defaultPromise();
      },

      defaultPromise: function () {
        var deferred = $q.defer();
        deferred.resolve();
        return deferred.promise;
      },

      cancel: function () {
        return this.stop();
      },

      running: function () {
        return this.isRunning;
      }
    });
  }
]);
