    function checkUsersValid(goodUsers) {
    	//console.log("goodUsers: "+goodUsers);
      	
      return function allUsersValid(submittedUsers) {
      	for(i=0;i<submittedUsers.length;i++){
      		console.log(i + ":" + submittedUsers[i] );
      	}
      	//console.log("submittedUsers: "+submittedUsers);
      	// submittedUsers.every(function(subV,subI) {
      	// 	console.log('subi: '+ subI);
      	// 	goodUsers.some(function(goodV,goodI) {
      	// 		console.log(subI + " " + goodI + " " + subV === goodV ? true : false);
      	// 		return subV === goodV ? true : false;
      	// 	});
      	// });
      };

    }
    
    module.exports = checkUsersValid



