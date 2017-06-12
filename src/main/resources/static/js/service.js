var app = angular.module('myservice',[]);

app.factory('xhzService', function($http, $q){

    return {
        test : function () {
            var deferred = $q.defer();
            $http({
                url : '/test',
                method : 'post',
                params : {
                    'id' : 999
                }
            }).success(function (response) {
                    deferred.resolve(response);
                }).error(function (response, status, headers, config){
            });
            return deferred.promise;
        }
    };
});