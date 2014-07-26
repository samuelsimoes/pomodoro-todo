angular.module("Pomodoro").controller("CounterController", [
  "$scope", "$rootScope", "$interval", "ShortBreak", "LongBreak", "$q",
  function ($scope, $rootScope, $interval, ShortBreak, LongBreak, $q) {
    var interval;

    var updateCounter = function () {
      var leftTime = $scope.currentCounterEntity.leftTimeInSeconds();

      $scope.isTimeout = (leftTime < 0);
      $scope.runTime = (leftTime < 0) ? (leftTime * -1) : leftTime;
    };

    var cleanCounter = function () {
      $interval.cancel(interval);
      $scope.runTime = 0;
      $scope.isTimeout = false;
      delete $scope.currentCounterEntity;
    };

    var startUpdateInterval = function () {
      interval = $interval(updateCounter, 1000);
    };

    var onCancelCounter = function () {
      $rootScope.$broadcast("counter:canceled", $scope.currentCounterEntity);
      cleanCounter();
    };

    var onStop = function () {
      $rootScope.$broadcast("counter:stopped", $scope.currentCounterEntity);
      cleanCounter();
    };

    var stop = function () {
      var stopPromise = $q.defer();

      $scope.currentCounterEntity.stop().then(function () {
        onStop();
        stopPromise.resolve();
      });

      return stopPromise.promise;
    };

    var start = function (counterEntity) {
      if ($scope.currentCounterEntity) {
        // If start command is invoked with one running tomato the counter stop
        // the current tomato and start the new tomato
        stop().then(function () {
          $scope.currentCounterEntity = counterEntity;
          $scope.currentCounterEntity.start().then(startUpdateInterval);
        });
      } else {
        $scope.currentCounterEntity = counterEntity;

        if (counterEntity.running()) {
          startUpdateInterval();
        } else {
          $scope.currentCounterEntity.start().then(startUpdateInterval);
        }
      }
    };

    var cancel = function () {
      $scope.currentCounterEntity.cancel().then(onCancelCounter);
    };

    $scope.stop = stop;

    $scope.cancel = cancel;

    $scope.shortBreak = function () {
      start(new ShortBreak());
    };

    $scope.longBreak = function () {
      start(new LongBreak());
    };

    $scope.showControls = function () {
      return $scope.currentCounterEntity;
    };

    $scope.$on("counter:stop", stop);

    $scope.$on("counter:start", function (evt, entity) {
      start(entity);
    });

    $scope.$on("$destroy", cleanCounter);
  }
]);
