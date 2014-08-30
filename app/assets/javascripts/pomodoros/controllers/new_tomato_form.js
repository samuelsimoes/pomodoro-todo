angular.module("Pomodoro").controller("NewPomodoroController", [
  "$scope", "$rootScope", "Pomodoro",
  function ($scope, $rootScope, Pomodoro) {
    var buildNewModel = function() {
      $scope.pomodoro =
        new Pomodoro({ pomodoro_list_id: $scope.stateParams.pomodoroListId });
    };

    $scope.save = function () {
      $scope.submitPromise = $scope.pomodoro.save();

      $scope.submitPromise.success(function () {
        $rootScope.$broadcast("new-pomodoro-saved", $scope.pomodoro);
        $scope.errors = {};
        buildNewModel();
      });
    };

    buildNewModel();
  }
]);
