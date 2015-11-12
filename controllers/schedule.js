
app.controller('ScheduleController', function($scope, $http, TablingService, MemberService, UtilService) {
  $scope.message = 'schedule controller';
 
  days = [0,1,2,3,4,5,6];  
  allTimes = [];
  h = {};
  for(var i=0;i<days.length;i++){
    h[days[i]]= [];
  }
  $scope.days = days;
  for(var i=0;i<168;i++){
    hour = i%24;
    //only include hours past 8
    if(hour >= 8){
      h[Math.floor(i/24)].push(i.toString());
      allTimes.push(i.toString());
    }
  }
  //create time hash
  $scope.timeHash = h;
  
  $scope.timeString = function(time){
    return TablingService.timeString(time);
  };
  
  $scope.schedule = [];
  TablingService.schedule(function(data){
    $scope.schedule = data;
  });

  $scope.toggleTime = function(time){
    console.log(time);
    index = $scope.schedule.indexOf(time);
    if(index == -1){
      $scope.schedule.push(time);
    }else{
      $scope.schedule.splice(index, 1);
    }
  }
  
  $scope.markAll = function(){
    $scope.schedule = allTimes;
  };
  $scope.clearAll = function(){
    $scope.schedule = [];
  };

  $scope.saveAll = function(){
    $http.post(tokenizedURL(ROOT_URL+'/save_schedule'), {'schedule': $scope.schedule})
      .success(function(data){
        location.reload();
      });
  };

});
