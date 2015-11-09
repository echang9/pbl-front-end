

app.controller('AddGolinkController', function($scope, $http, GoService, UtilService) {
  $scope.loadingGif = UtilService.loadingGif;
  $scope.loading=false;
  $scope.saveGolink = function(){
    $scope.loading = true;
    params = {'key':$scope.key,
      'url':$scope.url,
      'description':$scope.description,
      'member_email': 'berkeleypbl.webdev@gmail.com'
    };
    GoService.createGolink(params, function(data){
      console.log(data);
      $scope.loading = false;
    });
  };
});
