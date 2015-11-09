

app.controller('PointsController', function($scope, $http, PointsService) {
  $scope.message = 'hi there from pts controller';

  function init(){
    email = 'davidbliu@gmail.com';
    email = 'alice.sun94@gmail.com';
    PointsService.getMemberPoints(email, function(data){
      $scope.myPoints = data;
    });
  }
  init();
});
