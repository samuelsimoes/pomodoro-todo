angular.module("FocusOnDirective", []).directive("focusOn", [
  "$timeout",
  function ($timeout) {
    return {
      link: function ($scope, $el, attrs) {
        $scope.$on("focusOn", function (evt, fieldName) {
          if (fieldName != attrs.focusOn) { return; }

          $timeout(function (){
            $el.focus();
          });
        });
      }
    };
  }
]);
