angular-widget-demo
===================

Analysis of Nested Angular Applications and Widgets

## What have we learned

1. Two applications can sit on the same page as peers without issue. Only one will be auto-bootstrapped with the `ng-app` directive. Subsequent applications must explicitly call angular.bootstrap(el, [module]).

2. You can rename window.angular to a custom namespace with relatively few changes to the codebase. A renamed angular will sit alongside a standard angular without any obvious flaws, although it could still break as we make the application more complex.

3. Two applications *CAN* use different namespaces of angular that have been renamed alongside.

4. Although it does look feasible to rename the prefix (line 1235), this in fact, only renames the prefix of ng-app. The internals such as ng-Controller are directive names. These could also be renamed, however several directives take over known elements, such as select and form. These would cause confusion on nested apps.

5. You can easily hide most of the implementation of a third-party module behind a directive as an entry point. In the case of modules.html, App Gamma loads module Delta and uses a directive to isolate scope from one another. Note that the module could still access parent scope through inheritance and pull in app services, which may not be desired.


## Considerations

The most feasible option for a third party widget using angular is to package the widget as an Angular module to be included in the page's main application. If the widget is being injected into a non-angular site, we would need to provide a boilerplate to include angular and a simple application to load the module.

If the widget is being injected onto an existing angular site, the module would be subject to the versions and structure of that application. We would need to know what version(s) of angular are supported, and carefully namespace all of our Controllers, Services, etc so as not to conflict or be overwritten by the application or other module.

I suspect the maintenance of a third-party module to be quite intense, as containing pages would insist on angular upgrades over time. We would also need to maintain ongoing effort to troubleshoot bugs arising from conflicts in behavior with other modules.

