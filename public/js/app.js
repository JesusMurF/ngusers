(function () {
    var app = angular.module('users', []);

    app.controller('UserController', function(){
        this.user = {
            first: 'Jesús',
            last: 'Mur Fontanals',
            street: 'Los Planetas nº22',
            city: 'Madrid',
            state: 'Madrid',
            cp: 28080,
            abilities: ['Javascript', 'Python'],
            data: {
                worked_hours: 40,
                worked_hpd: 8,
                salary: 1200
            }
        }
    });

    app.controller('TabsController', function(){
       this.tab = 3;

       this.selectTab = function (tab) {
           this.tab = tab;
       }; 
    });

    app.controller('CommentsController', function(){
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
        
    });
})();