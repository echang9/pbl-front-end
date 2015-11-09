

app.controller('PointsController', function($scope, $http, PointsService, UtilService) {
  $scope.message = 'hi there from pts controller';
  $scope.loadingGif = UtilService.loadingGif;
  function init(){
    email = 'davidbliu@gmail.com';
    email = 'alice.sun94@gmail.com';
    PointsService.getMemberPoints(email, function(data){
      $scope.myPoints = data;
    });
  }
  init();
});
