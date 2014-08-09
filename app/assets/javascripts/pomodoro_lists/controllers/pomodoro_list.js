angular.module("Pomodoro").controller("PomodoroListController", [
  "$scope",
  function ($scope) {
    this.editMode = $scope.pomodoroList.isNew();

    this.enterEditMode = function () {
      this.rollBackAttributes = angular.copy($scope.pomodoroList.attributes);
      this.editMode = true;
    };

    this.keyPress = function (evt) {
      if (evt.keyCode !== 27) { return; }

      if ($scope.pomodoroList.isNew()) {
        $scope.pomodoroList.destroy();
      } else {
        $scope.pomodoroList.set(this.rollBackAttributes);
        this.editMode = false;
      }
    };

    this.update = function () {
      var that = this;

      $scope.pomodoroList.save().success(function () {
        that.editMode = false;
      });
    };

    this.destroy = function () {
      $scope.pomodoroList.destroy();
    };
  }
]);
