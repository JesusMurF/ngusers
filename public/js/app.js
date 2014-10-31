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
       this.tab = 1;

       this.selectTab = function (tab) {
           this.tab = tab;
       }; 
    });
})();