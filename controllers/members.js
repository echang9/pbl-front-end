
app.controller('MembersController', function($scope, $http, MemberService, UtilService) {
  function init(){
    MemberService.getCurrentMembers(function(data){
      $scope.currentMembers = data;
      $scope.committeeHash = MemberService.getCommitteeHash(data);
      $scope.committees = Object.keys($scope.committeeHash);
    });
  }
  $scope.message = 'hi from members controller';
  $scope.currentMembers = [];
  $scope.gravatarUrl = function(member){
    return UtilService.gravatarUrl(member);
  }
  init();
  $scope.loadingGif = UtilService.loadingGif; 
});
