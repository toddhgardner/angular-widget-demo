(function (angular, document, undefined) {
  "use strict";

  /*
   * App Beta represents the injectable application that could come from
   * a third-party. We need to make sure we are direct in everything we're doing
   */

  var element = document.getElementById("beta");
  var appBeta = angular.module("Beta", []);

  appBeta.controller("BetaFruitListCtrl", function ($scope) {

    $scope.fruits = [
      "mango",
      "pineapple",
      "passionfruit",
      "lime",
      "watermelon"
    ];

  });

  angular.bootstrap(element, ["Beta"]);

})(window.cangular, document);