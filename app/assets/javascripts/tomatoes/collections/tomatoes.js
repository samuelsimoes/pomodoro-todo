angular.module("Pomodoro").factory("Tomatoes", [
  "CollectionBase", "Tomato",
  function (CollectionBase, Tomato) {
    return CollectionBase.extend({
      url: "tomatoes",

      model: Tomato,

      comparator: function (a, b) {
        return a.attributes.order - b.attributes.order;
      }
    });
  }
]);
