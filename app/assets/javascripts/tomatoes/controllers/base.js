angular.module("Pomodoro").controller("TomatoesBaseController", [
  "$scope", "$rootScope", "$stateParams",
  function ($scope, $rootScope, $stateParams) {
    $scope.stateParams = $stateParams;
  }
]);
