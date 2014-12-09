(function () {
    var app = angular.module('users', ['ngRoute', 'user.controllers', 'user.directives', 'user.services', 'user.filters']);
    
    app.config(['$routeProvider',function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/user-list.html',
                controller: 'UserListController'
            })
            .when('/:type', {
                templateUrl: 'views/user-list.html',
                controller: 'UserListController'
            })
            .when('/user/:first', {
                templateUrl: 'views/user.html',
                controller: 'UserController',
                controllerAs: 'UserCtrl'
            })
            .otherwise({
                redirectTo: '/'
            })
    }]);
})();