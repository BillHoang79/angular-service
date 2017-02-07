
app.controller('bCtrl',function($scope, newService) {
	console.log(newService.newData())
	newService.addData(' and grabbing this data')
	console.log(newService.newData())
})

app.service('newService', serviceClass)

function serviceClass() {
	var aString = 'calling service by class'
	var addThisOne = function(newThing) {
		aString += newThing
	}

	this.newData = function() {
		return "String contains: " + aString
	}
	this.addData = addThisOne
}
