angular.module("DisableOnSendDirective", []).directive("disableOnSend", function ($timeout) {
  return {
    link: function ($scope, $el, attrs) {
      var options = { disableText: "Carregando...", promiseVariable: "submitPromise" },
          previousText = $el.html();

      if (attrs.disableOnSend) {
        angular.extend(options, $scope.$eval(attrs.disableOnSend));
      }

      $scope.$watch(options.promiseVariable, function (newData) {
        if (!newData) { return; }

        $el.attr("disabled", "disabled");
        $el.html(options.disableText);

        $scope[options.promiseVariable]["finally"](function () {
          $el.removeAttr("disabled");
          $el.html(previousText);
        });
      });
    }
  };
});
