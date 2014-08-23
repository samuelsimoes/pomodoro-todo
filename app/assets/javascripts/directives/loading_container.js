angular.module("LoadingContainerDirective", []).directive("loadingContainer", function () {
  return {
    link: function ($scope, $el, attrs) {
      var $indicator,
          options = $scope.$eval(attrs.loadingContainer) || {};

      if (options.indicatorSelector) {
        $indicator = $(options.indicatorSelector);
      } else {
        $indicator =
          $("<div class=\"loading-indicator\"><i class=\"fa fa-spinner fa-spin\"></i> Carregando...</div>");

        $el.prepend($indicator);
      }

      $indicator.hide();

      $scope.$watch("loadingPromise", function (newData, oldData) {
        if (!newData) { return; }

        $indicator.show();

        $scope.loadingPromise["finally"](function () {
          $indicator.hide();
        });
      });

      return $el;
    }
  };
});
