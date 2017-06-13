angular.module('xhz.controller', ['myservice'])

.controller('showCtrl', function ($scope, xhzService) {
    $scope.addShow = false;
    $scope.fileShow = false;
    $scope.scoreShow = false;
    $scope.editInfoShow = false;
    $scope.isLoading = true;
    $scope.leftPage = $scope.rightPage = true;
    $scope.page = 1;
    $scope.tmp = {};

	/*$scope.data = [{'id': '131220074', 'name': 'xhz', 'major': 'computer'},
        {'id': '131220168', 'name': 'jyb', 'major': 'computer'}];*/

	xhzService.getStudentsAsyn().then(function () {
	    $scope.data = xhzService.getStudents();
    });

    $scope.showEditInfo = function (item) {
        $scope.tmp = {};
        $scope.tmp.id = item.id;
        $scope.tmp.name = item.name;
        $scope.tmp.major = item.major;
        $scope.editInfoShow = true;
    };

    $scope.confirmEdit = function () {
        $scope.isLoading = true;
        xhzService.updateStudentAsyn($scope.tmp).then(function () {
            $scope.isLoading = false;
            $scope.addShow = false;
        });
    };

    $scope.showScore = function (item) {
        $scope.tmp.item = item;
        $scope.scoreShow = true;
    };

    $scope.confirmScore = function () {
    };

	$scope.showAdd = function () {
	    $scope.tmp = {};
	    $scope.addShow = true;
    };

    $scope.confirmAdd = function () {
        $scope.isLoading = true;
        xhzService.addStudentAysn($scope.tmp).then(function () {
            $scope.isLoading = false;
            $scope.addShow = false;
        });
    };

    $scope.showFile = function () {
        $scope.tmp = {};
        $scope.fileShow = true;
    };

    $scope.confirmFile = function () {
    };

    $scope.disShowAdd = function () {
        $scope.addShow = false;
    };

    $scope.disShowFile = function () {
        $scope.fileShow = false;
    };

    $scope.disShowEditInfo = function () {
        $scope.editInfoShow = false;
    };

    $scope.disShowScore = function () {
        $scope.scoreShow = false;
    };
});