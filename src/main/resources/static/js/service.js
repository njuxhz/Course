var app = angular.module('myservice',[]);

app.factory('xhzService', function($http, $q){

    var students;
    var isSuccess;

    return {
        getStudentsAsyn : function () {
            students = [];
            var deferred = $q.defer();
            $http({
                url : '/student',
                method : 'get'
            }).success(function (response) {
                for(var i = 0; i < response.length; i++) {
                    var item = {
                        'id' : response[i].id,
                        'name' : response[i].name,
                        'major' : response[i].major,
                        'regular' : response[i].regular,
                        'project' : response[i].project,
                        'final' : response[i].fin,
                        'total' : response[i].total
                    }
                    students.push(item);
                }
                deferred.resolve(response);
            }).error(function (response, status, headers, config){
            });
            return deferred.promise;
        },
        getStudents : function () {
            return students;
        },
        isSucceed : function () {
            return isSuccess;
        },
        addStudentAysn : function (student) {
            isSuccess = false;
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
                if(response == 1) isSuccess = true;
                deferred.resolve(response);
            }).error(function (response, status, headers, config){
            });
            return deferred.promise;
        },
        deleteStudentAysn : function (student) {
            isSuccess = false;
            var deferred = $q.defer();
            $http({
                url : '/student',
                method : 'delete',
                params : {
                    'id': student.id
                }
            }).success(function (response) {
                if(response == 1) isSuccess = true;
                deferred.resolve(response);
            }).error(function (response, status, headers, config){
            });
            return deferred.promise;
        },
        updateStudentAsyn : function (student) {
            isSuccess = false;
            var deferred = $q.defer();
            $http({
                url : '/student',
                method : 'post',
                params : {
                    'id' : student.id,
                    'name' : student.name,
                    'major' : student.major,
                    'regular' : student.regular,
                    'project' : student.project,
                    'final' : student.final,
                    'total' : student.total
                }
            }).success(function (response) {
                if(response == 1) isSuccess = true;
                deferred.resolve(response);
            }).error(function (response, status, headers, config){
            });
            return deferred.promise;
        },
        updateScoreAsyn : function (student) {
            isSuccess = false;
            var deferred = $q.defer();
            $http({
                url : '/score',
                method : 'post',
                params : {
                    'id' : student.id,
                    'regular' : student.regular,
                    'project' : student.project,
                    'final' : student.final,
                    'total' : student.total
                }
            }).success(function (response) {
                if(response == 1) isSuccess = true;
                deferred.resolve(response);
            }).error(function (response, status, headers, config){
            });
            return deferred.promise;
        },
        uploadFileAsyn : function (file) {
            students = [];
            var deferred = $q.defer();
            var fd = new FormData();
            fd.append('file', file);
            $http({
                url : '/file',
                method : 'post',
                data: fd,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).success(function (response) {
                for(var i = 0; i < response.length; i++) {
                    var item = {
                        'id' : response[i].id,
                        'name' : response[i].name,
                        'major' : response[i].major,
                        'regular' : response[i].regular,
                        'project' : response[i].project,
                        'final' : response[i].fin,
                        'total' : response[i].total
                    }
                    students.push(item);
                }
                deferred.resolve(response);
            }).error(function (response, status, headers, config){
            });
            return deferred.promise;
        }
    };
});