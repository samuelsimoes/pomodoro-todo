angular.module("Pomodoro").factory("PomodoroList", [
  "ModelBase", "Pomodoro", "$q",
  function (ModelBase, Pomodoro, $q) {
    return ModelBase.extend({
      urlRoot: "pomodoro_lists",

      loadRunningPomodoro: function () {
        var runningPomodoro = new Pomodoro(),
            deferred = $q.defer();

        runningPomodoro.fetch({
          url: this.url() + "/running_pomodoro"
        }).success(function () {
          deferred.resolve(runningPomodoro);
        });

        return deferred.promise;
      }
    });
  }
]);
