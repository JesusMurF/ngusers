(function () {
    /**
    * user.controllers Module
    *
    * Description
    */
    angular.module('user.controllers', [])
        .controller('UserListController', ['$scope', '$routeParams','userService', function($scope, $routeParams, userService){
            var type = $routeParams.type;

            if (type) {
                $scope.type = type;
                
                userService.byType(type).then(function(data){
                    $scope.users = data;
                })
            } else {
                userService.all().then(function(data) {
                    $scope.users = data;
                })
            };
        }])
        .controller('UserController', ['$scope', '$routeParams', 'userService', function($scope, $routeParams, userService){
            var first = $routeParams.first;
            $scope.user = {};

            userService.byName(first)
                .then(function(data) {
                    $scope.user = data;
                })
        }])
        .controller('TabsController', function(){
            this.tab = 3;

            this.selectTab = function (tab) {
                this.tab = tab;
       }; 
    });
})()