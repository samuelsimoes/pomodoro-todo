angular.module("Pomodoro").controller("NewTomatoController", [
  "$scope", "$rootScope", "Tomato",
  function ($scope, $rootScope, Tomato) {
    var buildNewModel = function() {
      $scope.tomato = new Tomato();
    };

    $scope.save = function () {
      $scope.submitPromise = $scope.tomato.save();

      $scope.submitPromise.success(function () {
        $rootScope.$emit("new-tomato-saved", $scope.tomato);
        $scope.errors = {};
        buildNewModel();
      });
    };

    buildNewModel();
  }
]);
