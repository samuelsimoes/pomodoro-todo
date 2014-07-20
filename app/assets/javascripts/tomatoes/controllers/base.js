angular.module("Pomodoro").controller("BaseController", [
  "$scope", "$rootScope", "$window", "Tomato",
  function ($scope, $rootScope, $windowObject, Tomato) {
    var defineCurrentTomato = function () {
      if (!$windowObject.currentRunningTomatoData) { return; }

      var currentTomato = new Tomato($windowObject.currentRunningTomatoData);

      $rootScope.$emit("counter:set-current-counter-entity", currentTomato);
      $rootScope.$emit("counter:start");
    };

    $scope.$watch("$viewContentLoaded", defineCurrentTomato);
  }
]);
