angular.module("Pomodoro").controller("PomodoroListController", [
  "$scope",
  function ($scope) {
    this.enterEditMode = function () {
      this.editMode = true;
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
