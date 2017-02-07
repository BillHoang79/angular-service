app.controller('aCtrl',function($scope, myService) {
	console.log(myService.getData())
	myService.addData(' grab this data')
	console.log(myService.getData())
})

// Service example
app.service('myService', function() {
	var myString = "this is a string"
	var addToString = function(newStr) {
		myString += newStr
	}

	this.getData = function() {
		return "String contains: " + myString
	}
	this.addData = addToString
})

