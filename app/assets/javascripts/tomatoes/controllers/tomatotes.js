angular.module("Pomodoro").controller("TomatoesController", [
  "$scope", "Tomatoes", "Tomato",
  function ($scope, Tomatoes, Tomato) {
    var tomatoes =
      new Tomatoes([], { pomodoroListId: $scope.stateParams.pomodoroListId });

    tomatoes.fetchUnstarted();

    $scope.tomatoes = tomatoes.models;

    $scope.$on("new-tomato-saved", function (event, tomato) {
      tomatoes.add(tomato);
    });

    $scope.sortableOptions = {
      items: ".pomodoro-list-item",
      stop: function () {
        tomatoes.computeOrder().persistCollection();
      }
    };

    $scope.$on("counter:start", function (evt, entity) {
      if (entity instanceof Tomato) {
        tomatoes.remove(entity);
      }
    });

    $scope.$on("counter:canceled", function (evt, entity) {
      if (entity instanceof Tomato) {
        tomatoes.add(entity);
      }
    });
  }
]);
