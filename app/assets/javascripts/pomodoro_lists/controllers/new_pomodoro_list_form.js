angular.module("Pomodoro").controller("NewPomodoroListController", [
  "$scope", "$rootScope", "PomodoroList",
  function ($scope, $rootScope, PomodoroList) {
    var buildNewModel = function() {
      $scope.pomodoroList = new PomodoroList();
    };

    $scope.save = function () {
      $scope.submitPromise = $scope.pomodoroList.save();

      $scope.submitPromise.success(function () {
        $rootScope.$emit("new-pomodoro-list-saved", $scope.pomodoroList);
        $scope.errors = {};
        buildNewModel();
      });
    };

    buildNewModel();
  }
]);
