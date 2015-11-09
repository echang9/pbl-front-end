
app.controller('GoController', function($scope, $http, GoService) {
  $scope.message = 'hi there from go controller';
  function init(){
    GoService.getRecentGolinks(function(data){
      $scope.golinks = data;
    });
  }
  init();
});
