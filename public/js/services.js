(function() {
    /**
    * user.services Module
    *
    * Description
    */
    angular.module('user.services', [])
        .factory('userService', ['$http', '$q', '$filter',function($http, $q, $filter){
            var slugify = $filter('slugify');
            var deferred = $q.defer();

            function all() {
                $http.get('/api/employee/all')
                    .success(function(data) {
                        deferred.resolve(data);
                    });
                return deferred.promise;
            }

            function byName(first) {
                var first = slugify(first);
                var deferred = $q.defer();
                all().then(function(data) {
                    var results = data.filter(function(user) {
                        return slugify(user.first) === first;
                    });
                    if (results.length > 0) {
                        deferred.resolve(results[0]);
                    } else {
                        deferred.reject();
                    }
                });
                return deferred.promise;
            }

            // function byType(){
            //     var deferred = $q.defer();

            //     // Resolver error .some
            //     all().then(function(data){
            //         debugger;
            //         var results = data.filter(function(user){
            //             return user.type.some(function(t){
            //                 return t === type;
            //             });
            //         });
            //         deferred.resolve(results);
            //     });
            //     return deferred.promise;
            // }

            return {
                all: all,
                byName: byName
                //byType: byType
            };
        }]);
})();
