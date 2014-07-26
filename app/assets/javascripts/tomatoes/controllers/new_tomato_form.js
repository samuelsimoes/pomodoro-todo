angular.module("Pomodoro").controller("NewTomatoController", [
  "$scope", "$rootScope", "Tomato",
  function ($scope, $rootScope, Tomato) {
    var buildNewModel = function() {
      $scope.tomato =
        new Tomato({ pomodoro_list_id: $scope.stateParams.pomodoroListId });
    };

    $scope.save = function () {
      $scope.submitPromise = $scope.tomato.save();

      $scope.submitPromise.success(function () {
        $rootScope.$broadcast("new-tomato-saved", $scope.tomato);
        $scope.errors = {};
        buildNewModel();
      });
    };

    buildNewModel();
  }
]);
