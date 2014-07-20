angular.module("Pomodoro").controller("TomatoesController", [
  "$scope", "$rootScope", "Tomatoes", "Tomato",
  function ($scope, $rootScope, Tomatoes, Tomato) {
    var tomatoes = new Tomatoes();

    tomatoes.fetch();

    $scope.tomatoes = tomatoes.models;

    $rootScope.$on("new-tomato-saved", function (event, tomato) {
      tomatoes.add(tomato);
    });

    $scope.sortableOptions = {
      stop: function () {
        tomatoes.computeOrder().persistCollection();
      }
    };

    $rootScope.$on("counter:set-current-counter-entity", function (evt, entity) {
      if (entity instanceof Tomato) {
        tomatoes.remove(entity);
      }
    });

    $rootScope.$on("counter:canceled", function (evt, entity) {
      if (entity instanceof Tomato) {
        tomatoes.add(entity);
      }
    });
  }
]);
