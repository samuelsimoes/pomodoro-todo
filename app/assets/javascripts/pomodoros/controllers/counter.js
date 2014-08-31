angular.module("Pomodoro").controller("CounterController", [
  "$scope", "$rootScope", "$interval", "ShortBreak", "LongBreak", "$q",
  function ($scope, $rootScope, $interval, ShortBreak, LongBreak, $q) {
    var that = this;

    $scope.$on("counter:start", function (evt, entity) {
      that.start(entity);
    });

    $scope.$on("$destroy", this.cleanCounter);

    this.start = function (counterEntity) {
      if (this.currentCounterEntity) {
        this.stop().then(function () {
          that.startNewCounterEntity(counterEntity);
        });
      } else {
        this.startNewCounterEntity(counterEntity);
      }
    };

    this.startNewCounterEntity = function (counterEntity) {
      this.currentCounterEntity = counterEntity;

      if (counterEntity.running()) {
        this.startUpdateInterval();
      } else {
        this.currentCounterEntity.start().then(angular.bind(this, this.startUpdateInterval));
      }
    };

    this.stop = function () {
      var stopPromise = $q.defer();

      $scope.stopPromise = stopPromise.promise;

      this.currentCounterEntity.stop().then(function () {
        that.cleanCounter();
        stopPromise.resolve();
      });

      return stopPromise.promise;
    };

    this.updateCounter = function () {
      var state = { isTimeout: false, runTime: 0 };

      if (this.currentCounterEntity) {
        state = {
          isTimeout: this.currentCounterEntity.isTimeout(),
          runTime: this.currentCounterEntity.runTime()
        };
      }

      angular.extend(this, state);
    };

    this.cleanCounter = function () {
      $interval.cancel(this.interval);
      delete this.currentCounterEntity;
      this.updateCounter();
    };

    this.startUpdateInterval = function () {
      this.updateCounter();
      this.interval = $interval(angular.bind(this, this.updateCounter), 1000);
    };

    this.onCancelCounter = function () {
      $rootScope.$broadcast("counter:canceled", this.currentCounterEntity);
      this.cleanCounter();
    };

    this.cancel = function () {
      $scope.cancelPromise = this.currentCounterEntity.cancel();
      $scope.cancelPromise.then(angular.bind(this, this.onCancelCounter));
    };

    this.shortBreak = function () {
      this.start(new ShortBreak());
    };

    this.longBreak = function () {
      this.start(new LongBreak());
    };

    this.showControls = function () {
      return this.currentCounterEntity;
    };
  }
]);
