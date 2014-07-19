angular.module("Pomodoro").controller("TomatoController", [
  "$scope",
  function ($scope) {
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
  }
]);
