app.service("MemberService",  function($http) {
    var serviceInstance = {};
    serviceInstance.getCurrentMembers = function(callback){
        $http.get(tokenizedURL(ROOT_URL+'/current_members'))
            .success(function(data){
                callback(data);
            });
    };
    serviceInstance.getMemberHash = function(callback){
        $http.get(tokenizedURL(ROOT_URL+'/member_email_hash'))
            .success(function(data){
                callback(data);
            });
    };
    serviceInstance.getCommitteeHash = function(data){
        h = {};
        seen = new Set();
        for(var i=0;i<data.length;i++){
            if(!seen.has(data[i].committee)){
                seen.add(data[i].committee);
                h[data[i].committee] = [];
            }
            h[data[i].committee].push(data[i]);
        }
        return h;
    };
    return serviceInstance;
});
