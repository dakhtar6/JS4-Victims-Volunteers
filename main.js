
var victimsNumber = prompt("How many disaster victims are there?");

//var victimPhoneNumberArray = [];
//var victimStreetArray = [];
//var victimNameArray = [];

var victims = [];

var victimObject = {}; 

for (var i=0; i<victimsNumber; i++) {

	var victimName = prompt("What is the name of the individual?");
	//victimNameArray.push(victimName);

	var victimPhoneNumber = prompt("What is the individual's phone number?");
	//phoneNumberArray.push(victimPhoneNumber); 
	
	var victimStreet = prompt("What street does the individual live on?");
	//streetArray.push(victimStreet);

	victimObject = {
		"name": victimName,
		"phoneNumber": victimPhoneNumber,
		"street": victimStreet
	};

	victims.push(victimObject);

};

console.log(victims)
// < one iteration
// <= two iterations

var volunteersNumber = prompt("How many volunteers are there?");

var volunteersPhoneNumberArray = [];
var volunteersStreetArray =[];
var volunteersNameArray = [];

var volunteersObject= [];

var volunteers = [];

for (var i=0; i<volunteersNumber; i++) {

 	var volunteersName = prompt("What is the volunteer's name?");
 	//volunteersNameArray.push(volunteersName); 

 	var volunteersPhoneNumber = prompt("What is the volunteer's phone number?");
 	//volunteersPhoneNumberArray.push(volunteersPhoneNumber);

 	var volunteersStreet = prompt("What street does the volunteer live on?");
	//var volunteersStreetArray.push(volunteersStreet);

 	volunteersObject= {
 	name: volunteersName,
 	phone: volunteersPhoneNumber,
 	address: volunteersStreet
 	};

 	volunteers.push(volunteersObject)

 }; 


