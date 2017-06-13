var app = angular.module('myservice',[]);

app.factory('xhzService', function($http, $q){

    var students;

    return {
        getStudentsAsyn : function () {
            students = [];
            var deferred = $q.defer();
            $http({
                url : '/student',
                method : 'get'
            }).success(function (response) {
                deferred.resolve(response);
            }).error(function (response, status, headers, config){
            });
            return deferred.promise;
        },
        getStudents : function () {
            return students;
        },
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