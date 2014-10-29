(function (angular, document, undefined) {
  "use strict";

  /*
   * Module Delta represents a third-party module for injecting content onto another application
   */

  var delta = angular.module("Delta", []);

  delta.directive("deltaFruitList", function () {
    return {
      restrict: "A",
      scope: {},
      controller: "DeltaFruitListCtrl",
      templateUrl: "tpl/fruitList.tpl.html"
    };
  });

  // NOTE: Important to namespace things so they don't conflict with parent module.
  delta.controller("DeltaFruitListCtrl", function ($scope) {

    $scope.fruits = [
      "mango",
      "pineapple",
      "passionfruit",
      "lime",
      "watermelon"
    ];

  });

})(window.angular, document);