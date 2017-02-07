app.controller('myCtrl', function($scope, myFactory) {
	console.log(myFactory.getData())
	myFactory.addData(' get this data')
	console.log(myFactory.getData())
})

// Factory example
app.factory('myFactory', function() {
	var myString = "this is some data"
	var addToString = function(newstr) {
		myString += newstr
	}
	return {
		getData: function() {
			return "String contains: " + myString 
		},
		addData: addToString
	}
})
