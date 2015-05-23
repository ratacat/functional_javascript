var getShort = function(arr) {
	var res = [];
	temp = arr.filter(function(v,i,cbarr) {
		//console.log(v.message.length);
		return v.message.length < 50 ? 1 : 0; 
	});

	temp.map(function(v,i) {
		res.push(v.message);
	})
	//console.log(res);
	return res;
};

//module.exports = getShort;

module.exports = function getShortM (arr) {
	return arr.filter(function(item) {
		return item.message.length < 50;
	}).map(function(item) {
		return item.message;
	});
}

