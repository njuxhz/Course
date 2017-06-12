angular.module('xhz.controller', ['myservice'])

.controller('showCtrl', function ($scope, xhzService) {
	$scope.data = [{'id': '131220074', 'name': 'xhz', 'major': 'computer'},
        {'id': '131220168', 'name': 'jyb', 'major': 'computer'}];
	$scope.page = 1;

    xhzService.test().then(function () {
    });
});