(function (angular, document, undefined) {
  "use strict";

  /*
   * App Alpha represents the end-customer's application. They are probably taking
   * advantage of all the default bindings and boostrapping of Angular.
   */

  var appAlpha = angular.module("Alpha", []);

  appAlpha.controller("FruitListCtrl", function ($scope) {

    $scope.fruits = [
      "apple",
      "orange",
      "lemon",
      "kiwi",
      "grape"
    ];

  });

})(window.angular, document);