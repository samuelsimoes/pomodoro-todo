angular.module("Pomodoro").controller("PomodoroController", [
  "$scope", "$rootScope",
  function ($scope, $rootScope) {
    this.editMode = false;

    this.enterEditMode = function () {
      this.rollBackAttributes = angular.copy($scope.pomodoro.attributes);
      this.editMode = true;
      $scope.$broadcast("focusOn", "pomodoroDescription");
    };

    this.keyPress = function (evt) {
      if (evt.keyCode !== 27) { return; }
      this.cancelEdition();
    };

    this.cancelEdition = function () {
      if (!this.editMode) { return; }
      $scope.pomodoro.set(this.rollBackAttributes);
      this.editMode = false;
    };

    this.update = function () {
      $scope.submitPromise = $scope.pomodoro.save();

      $scope.submitPromise.success(angular.bind(this, function () {
        this.editMode = false;
      }));
    };

    this.showStartButton = function () {
      return $scope.$index === 0;
    };

    this.start = function () {
      $rootScope.$broadcast("counter:start", $scope.pomodoro);
    };

    this.remove = function () {
      $scope.destroyPromise = $scope.pomodoro.destroy();
    };
  }
]);
