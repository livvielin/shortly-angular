angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.links = [];

  $scope.addLink = function() {
    $scope.links.push($scope.newLink);
    $scope.newLink = '';
  };
});
