angular.module("Pomodoro").controller("TomatoesController", [
  "$scope", "$rootScope", "Tomatoes",
  function ($scope, $rootScope, Tomatoes) {
    var tomatoes = new Tomatoes();

    tomatoes.fetch();

    $scope.tomatoes = tomatoes.models;

    $rootScope.$on("new-tomato-saved", function (event, tomato) {
      tomatoes.add(tomato);
    });
  }
]);
