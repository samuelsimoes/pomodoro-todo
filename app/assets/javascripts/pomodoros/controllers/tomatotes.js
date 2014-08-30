angular.module("Pomodoro").controller("PomodorosController", [
  "$scope", "Pomodoros", "Pomodoro",
  function ($scope, Pomodoros, Pomodoro) {
    var pomodoros =
      new Pomodoros([], { pomodoroListId: $scope.stateParams.pomodoroListId });

    pomodoros.fetchUnstarted();

    $scope.loadingPromise = pomodoros.fetchUnstarted();

    $scope.pomodoros = pomodoros.models;

    $scope.$on("new-pomodoro-saved", function (event, pomodoro) {
      pomodoros.add(pomodoro);
    });

    $scope.sortableOptions = {
      items: ".pomodoro-list-item",
      cursor: "move",
      stop: function () {
        pomodoros.computeOrder().persistCollection();
      }
    };

    $scope.$on("counter:start", function (evt, entity) {
      if (entity instanceof Pomodoro) {
        pomodoros.remove(entity);
      }
    });

    $scope.$on("counter:canceled", function (evt, entity) {
      if (entity instanceof Pomodoro) {
        pomodoros.add(entity);
      }
    });
  }
]);
