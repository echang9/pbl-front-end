
app.service("UtilService",  function($http) {
  var serviceInstance = {};
  serviceInstance.loadingGif ='https://mmstatic.thcdn.com/4.00.152.8858/img/ajax-loader7.gif'; 
  serviceInstance.gravatarUrl = function(member){
    if( member.facebook_url != null && member.facebook_url != ''){
      return member.facebook_url;
    }
    email = member.email;
    hash = md5(email);
    url = 'http://www.gravatar.com/avatar/';
    url = url+hash;
    return url;
  };
  return serviceInstance;
});
