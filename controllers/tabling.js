
app.controller('TablingController', function($scope, $http, TablingService, MemberService) {
  function init(){
    TablingService.getTablingSchedule(function(data){
      console.log(data);
      console.log('that was data');
      $scope.tablingSlots = data;
      $scope.message = 'hi ther';
    });
    MemberService.getMemberHash(function(data){
      $scope.memberHash = data
    });
  }
  init();
  $scope.message = 'hi from tabling';
});
