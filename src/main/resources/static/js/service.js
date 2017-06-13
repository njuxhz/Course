var app = angular.module('myservice',[]);

app.factory('xhzService', function($http, $q){

    return {
        addStudentAysn : function (student) {
            var deferred = $q.defer();
            $http({
                url : '/student',
                method : 'put',
                params : {
                    'id': student.id,
                    'name': student.name,
                    'major': student.major
                }
            }).success(function (response) {
                deferred.resolve(response);
            }).error(function (response, status, headers, config){
            });
            return deferred.promise;
        },
        updateStudentAsyn : function (student) {
            var deferred = $q.defer();
            $http({
                url : '/student',
                method : 'post',
                params : {
                    'id': student.id,
                    'name': student.name,
                    'major': student.major
                }
            }).success(function (response) {
                deferred.resolve(response);
            }).error(function (response, status, headers, config){
            });
            return deferred.promise;
        }
    };
});