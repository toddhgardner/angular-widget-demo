(function (angular, undefined) {
  "use strict";

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


})(window.angular);