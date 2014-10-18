angular.module("Pomodoro").controller("NewPomodoroController", [
  "$scope", "$rootScope", "Pomodoro",
  function ($scope, $rootScope, Pomodoro) {
    this.buildNewModel = function() {
      this.pomodoro =
        new Pomodoro({ pomodoro_list_id: $scope.stateParams.pomodoroListId });
    };

    this.save = function () {
      $scope.submitPromise = this.pomodoro.save();
      $scope.submitPromise.success(angular.bind(this, this.onSave));
    };

    this.onSave = function () {
      $rootScope.$broadcast("new-pomodoro-saved", this.pomodoro);
      this.buildNewModel();
    };

    this.buildNewModel();
  }
]);
