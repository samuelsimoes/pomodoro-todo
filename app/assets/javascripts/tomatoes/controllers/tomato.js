angular.module("Pomodoro").controller("TomatoController", [
  "$scope", "$rootScope",
  function ($scope, $rootScope) {
    $scope.editMode = false;

    $scope.enterEditMode = function () {
      $scope.editMode = true;
    };

    $scope.update = function () {
      var promise = $scope.tomato.save();

      promise.success(function () {
        $scope.editMode = false;
      });
    };

    $scope.showStartButton = function () {
      return $scope.$index === 0;
    };

    $scope.start = function () {
      $rootScope.$emit("counter:set-current-counter-entity", $scope.tomato);
      $rootScope.$emit("counter:start");
    };
  }
]);
