angular.module("LoadingFieldDirective", []).directive("loadingField", function () {
  return {
    link: function ($scope, $el, attrs) {
      $el.wrap("<div>");

      var $wrapper = $el.parent("div");

      $scope.$watch("submitPromise", function (newData, oldData) {
        if (!newData) { return; }

        $el.attr("disabled", "disabled");
        $wrapper.addClass("loading");

        $scope.submitPromise["finally"](function () {
          $el.removeAttr("disabled");
          $wrapper.removeClass("loading");
        });
      });

      return $el;
    }
  };
});
