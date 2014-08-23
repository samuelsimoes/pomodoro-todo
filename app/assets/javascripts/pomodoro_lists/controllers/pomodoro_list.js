angular.module("Pomodoro").controller("PomodoroListController", [
  "$scope", "$rootScope",
  function ($scope, $rootScope) {
    this.editMode = $scope.pomodoroList.isNew();

    // initial focus on DOM node creation
    $scope.$watch("$viewContentLoaded", function () {
      if (!$scope.pomodoroList.isNew()) { return; }
      $scope.$broadcast("focusOn", "listTitle");
    });

    this.enterEditMode = function () {
      this.rollBackAttributes = angular.copy($scope.pomodoroList.attributes);
      this.editMode = true;
      $scope.$broadcast("focusOn", "listTitle");
    };

    this.keyPress = function (evt) {
      if (evt.keyCode !== 27) { return; }
      this.cancelEdition();
    };

    this.cancelEdition = function () {
      if ($scope.pomodoroList.isNew()) {
        $scope.pomodoroList.destroy();
      } else {
        $scope.pomodoroList.set(this.rollBackAttributes);
        this.editMode = false;
      }
    };

    this.update = function () {
      $scope.submitPromise = $scope.pomodoroList.save();

      $scope.submitPromise.success(angular.bind(this, function () {
        this.editMode = false;
      }));
    };

    this.destroy = function () {
      $scope.pomodoroList.destroy().then(function () {
        $rootScope.$broadcast("pomodoro-list-deleted", $scope.pomodoroList);
      });
    };
  }
]);
