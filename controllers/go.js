
app.controller('GoController', function($scope, $http, GoService, UtilService) {
  $scope.loadingGif = UtilService.loadingGif;
  $scope.loading=false;
  $scope.message = 'hi there from go controller';
  $scope.searchGolinks = function(searchTerm){
    $scope.loading = true;
    GoService.searchGolinks(searchTerm, function(data){
      $scope.golinks = data;
      $scope.loading=false;
    });
  }
  GoService.recentGolinks(function(data){
    $scope.golinks = data;
    $scope.$digest();
  });
});
