
app.controller('TablingController', function($scope, $http, TablingService, MemberService, UtilService) {
  $scope.loadingGif = UtilService.loadingGif;
  $scope.gravatarUrl = UtilService.gravatarUrl;

  TablingService.tablingSlots(function(data){
    $scope.tablingSlots = data;
  });
  MemberService.memberHash(function(data){
    $scope.memberHash = data;
  });
});
