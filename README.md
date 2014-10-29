angular-widget-demo
===================

Demo of Nested Angular Applications and Widgets


## What have we learned

1. Two applications can sit on the same page as peers without issue. Only one will be auto-bootstrapped with the `ng-app` directive. Subsequent applications must explicitly call angular.bootstrap(el, [module]).

2. You can rename window.angular to a custom namespace with relatively few changes to the codebase. A renamed angular will sit alongside a standard angular without any obvious flaws, although it could still break as we make the application more complex.

3. Two applications *CAN* use different namespaces of angular that have been renamed alongside.


