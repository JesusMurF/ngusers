(function () {
    /**
    * user.directives Module
    *
    * Description
    */
    angular.module('user.directives', [])
    .directive('userData', function(){
      return {
        restrict: 'E',
        templateUrl: 'partials/user-data.html'
      };
    })

    .directive('userWork', function(){
      return {
        restrict: 'E',
        templateUrl: 'partials/user-work.html'
      };
    })

    .directive('userComments', function(){
      return {
          restrict: 'E',
          templateUrl: 'partials/user-comments.html',
          controller: function () {
            this.comments = [];
            this.comment = {};

            this.anonymousChanged = function () {
               if (this.comment.anonymous) {
                    this.comment.email = "";
               };
            };

            this.addComment = function () {
                this.comment.date = Date.now();
                this.comments.push(this.comment);
                this.comment = {};
           };
        
        }, controllerAs: 'cmtsCtrl'
      };
    });
})();