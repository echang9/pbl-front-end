
app.service("UtilService",  function($http) {
  var serviceInstance = {};
  serviceInstance.loadingGif ='./images/loading-gif.gif';
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
