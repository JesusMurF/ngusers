(function () {
    angular.module('user.filters', [])
    // Revisar este filtro
        .filter('slugify', function(){
            return function(input){
                if (!input) return "";
                var tittles = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç";
                var original = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc";
                for (var i = 0; i < tittles.length; i++) {
                    input = input.replace(tittles.charAt(i), original.charAt(i)).toLowerCase();
                    };
                    console.log(input);
                    return input;
                };
        });
})();
