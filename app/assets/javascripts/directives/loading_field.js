angular.module("LoadingFieldDirective", []).directive("loadingField", function () {
  return {
    link: function ($scope, $el, attrs) {
      $el.wrap("<div>");
      var options = { disableField: true },
          $wrapper = $el.parent("div");

      if (attrs.loadingField) {
        angular.extend(options, $scope.$eval(attrs.loadingField));
      }

      $scope.$watch("submitPromise", function (newData, oldData) {
        if (!newData) { return; }

        if (options.disableField) {
          $el.attr("disabled", "disabled");
        }

        $wrapper.addClass("loading");

        $scope.submitPromise["finally"](function () {
          if (options.disableField) {
            $el.removeAttr("disabled");
          }
          $wrapper.removeClass("loading");
        });
      });

      return $el;
    }
  };
});
