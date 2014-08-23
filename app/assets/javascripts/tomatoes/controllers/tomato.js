angular.module("Pomodoro").controller("TomatoController", [
  "$scope", "$rootScope",
  function ($scope, $rootScope) {
    $scope.editMode = false;

    $scope.enterEditMode = function () {
      $scope.rollBackAttributes = angular.copy($scope.tomato.attributes);
      $scope.editMode = true;
    };

    $scope.keyPress = function (evt) {
      if (evt.keyCode !== 27) { return; }
      $scope.pomodoroList.set(this.rollBackAttributes);
      $scope.editMode = false;
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
