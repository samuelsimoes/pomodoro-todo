angular.module("Pomodoro").factory("Tomatoes", [
  "CollectionBase", "Tomato",
  function (CollectionBase, Tomato) {
    return CollectionBase.extend({
      url: function () {
        return "/pomodoro_lists/" + this.options.pomodoroListId + "/tomatoes";
      },

      model: Tomato,

      comparator: function (a, b) {
        return a.attributes.order - b.attributes.order;
      },

      /*
       * The minimium "order" attribute value present in the models
       * of this collection.
       */
      minOrderValue: function () {
        if (!this.models.length) { return 0; }

        var minValue, modelOrder;

        for (var i = 0, l = this.models.length; i < l; i ++) {
          modelOrder = this.models[i].attributes.order;

          if (!minValue || modelOrder < minValue) {
            minValue = modelOrder;
          }
        }

        return minValue;
      },

      /*
       * Compute in every model the new value for "order" attribute based in the
       * the array position of this model in the current in memory collection.
       */
      computeOrder: function () {
        var minOrderValue = this.minOrderValue();

        for (var i = 0, l = this.models.length; i < l; i ++) {
          this.models[i].set("order", (minOrderValue + i));
        }

        return this;
      },

      persistCollection: function () {
        return this.sync({
          url: (this.url() + "/update_collection_order")
        });
      }
    });
  }
]);
