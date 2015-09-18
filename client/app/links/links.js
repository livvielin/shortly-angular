angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.links = {};

  $scope.getLinks = function () {
    Links.getLinks()
    .then(function (links) {
      $scope.links = links;
    })
    .catch(function (error) {
      console.error(error);
    });
  };
});
