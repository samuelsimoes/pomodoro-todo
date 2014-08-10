angular.module("Pomodoro").controller("TomatoController", [
  "$scope", "$rootScope",
  function ($scope, $rootScope) {
    $scope.editMode = false;

    $scope.enterEditMode = function () {
      $scope.editMode = true;
    };

    $scope.update = function () {
      $scope.submitPromise = $scope.tomato.save();

      $scope.submitPromise.success(function () {
        $scope.editMode = false;
      });
    };

    $scope.showStartButton = function () {
      return $scope.$index === 0;
    };

    $scope.start = function () {
      $rootScope.$broadcast("counter:start", $scope.tomato);
    };

    $scope.remove = function () {
      $scope.tomato.destroy();
    };
  }
]);
