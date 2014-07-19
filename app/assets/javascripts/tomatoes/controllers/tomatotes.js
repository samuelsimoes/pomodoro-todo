angular.module("Pomodoro").controller("TomatoesController", [
  "$scope", "Tomatoes",
  function ($scope, Tomatoes) {
    var tomatoes = new Tomatoes();

    tomatoes.fetch();

    $scope.tomatoes = tomatoes.models;
  }
]);
