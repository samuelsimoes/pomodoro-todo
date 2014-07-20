angular.module("Pomodoro").controller("CounterController", [
  "$scope", "$rootScope", "$interval",
  function ($scope, $rootScope, $interval) {
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
      $rootScope.$emit("counter:canceled", $scope.currentCounterEntity);
      cleanCounter();
    };

    var onStop = function () {
      $rootScope.$emit("counter:stopped", $scope.currentCounterEntity);
      cleanCounter();
    };

    var start = function () {
      if (!$scope.currentCounterEntity.running()) {
        $scope.currentCounterEntity.start().then(startUpdateInterval);
      } else {
        startUpdateInterval();
      }
    };

    var stop = function () {
      $scope.currentCounterEntity.stop().then(onStop);
    };

    var cancel = function () {
      $scope.currentCounterEntity.cancel().then(onCancelCounter);
    };

    var setCurrentEntity = function (entity) {
      if ($scope.currentCounterEntity) { stop(); }
      $scope.currentCounterEntity = entity;
    };

    $scope.stop = stop;

    $scope.cancel = cancel;

    $scope.showControls = function () {
      return $scope.currentCounterEntity;
    };

    $rootScope.$on("counter:start", start);

    $rootScope.$on("counter:stop", stop);

    $rootScope.$on("counter:set-current-counter-entity", function (evt, entity) {
      setCurrentEntity(entity);
    });
  }
]);
