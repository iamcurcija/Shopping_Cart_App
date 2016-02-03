app.service('bagService', function(){

	var mybag = this;

	this.bag = [];

	this.addItem = function(item,quantity) {
    	mybag.bag.push(item,quantity);
    	console.log(mybag.bag);
    	return mybag;
	};


});