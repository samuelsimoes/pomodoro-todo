angular.module("Pomodoro").factory("PomodoroList", [
  "ModelBase", "Tomato", "$q",
  function (ModelBase, Tomato, $q) {
    return ModelBase.extend({
      urlRoot: "pomodoro_lists",

      loadRunningPomodoro: function () {
        var runningTomato = new Tomato(),
            deferred = $q.defer();

        runningTomato.fetch({
          url: this.url() + "/running_pomodoro"
        }).success(function () {
          deferred.resolve(runningTomato);
        });

        return deferred.promise;
      }
    });
  }
]);
