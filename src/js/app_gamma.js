(function (angular, document, undefined) {
  "use strict";

  /*
   * App Gamma represents the end-customer's application that references a third-party
   * as a Angular Module.
   */

  var appAlpha = angular.module("Gamma", ["Delta"]);

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