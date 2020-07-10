//src : https://www.youtube.com/watch?v=liyKaJ55w7s&list=PL2dFE_-uE4Hi1lpUWWRqPNOwZgPjpiabJ&index=26

//let a= 400;
//console.log(a);

// ***************** JS INPUT / OUTPUT ***************************************


let text_to_show= "<h2> Hi, there! </h2>";
document.write(text_to_show);		//HTML Page output
//text_to_show.innerHTML= 'Something something';		//HTML Page input


// ***************** USER INTERACTIVE *****************************************

function alert_func() {
	alert('Hi, this will be displayed at alert box you know');
}

function prompt_func() {
	let userInput= prompt('Hi, are you 20 years older?');
	console.log(userInput);		// whatever user inputs in text-box
}

function confirm_func() {
	let userInput= confirm('Hi, are you ready to go ahead?');
	console.log(userInput);		// true or false
}


document.write(' <br/>');
document.write(' <br/>');
// ***************** MODIFYING HTML/ WEBPAGE BY JS *****************************************


let headVarByID= document.getElementById('head');						
console.log(headVarByID);
headVarByID.innerHTML= 'This is the new text modified by JS and using getElementById';


let headVarByClassName= document.getElementsByClassName('text');		// returns an array
headVarByClassName[0].innerHTML = 'Text changed by getElementsByClassName';
console.log(headVarByClassName);


let headVarByTagName= document.getElementsByTagName('h1');				// returns an array
headVarByTagName[0].innerHTML = 'Text changed by getElementsByTagName';
//console.log(headVarByTagName);


// ***************** LOOPS ********************************************************

/*
let a=1;
while(a<10) {
	document.write(a);
	document.write('<br/>');
	a+=1;
}
document.write('Here is final value of a: '+a);
*/

/*
var a= [2,4,6,8];
document.write(' for of <br/>');
for( x of a) {								// prints array values
	document.write(x+ '<br/>');
}

document.write('for in <br/>');
for( x in a) {							// prints array index
	document.write(x+ '<br/>');
}
*/

document.write(' <br/>');
document.write(' <br/>');
// ***************** CREATING A FUNCTION *****************************************
var a= [2,4,6,8];
function printSomething() {
	document.write('<br/>');
	for( x of a) {								// prints array values
		document.write(x+ '<br/>');
	}
}

printSomething();


document.write(' <br/>');
document.write(' <br/>');
// ***************** CREATING AN OBJECT *****************************************
document.write('***************** CREATING AN OBJECT *****************************');

let obj = new Object();														// Type 1 of creating object
obj.name = "PRiyanka Singh";
obj.siblings= 2;
obj.game= 'Table Tennis';

for( key in obj) 
	document.write( key +' is '+ obj[key]+' <br/>');

let obj2 = {
	name: "PRiyanka Singh", 
	siblings: 2, 
	game: 'Table Tennis',
	display: function() {
		document.write( 'Heyyya I am here <br/>');
	}
};		// Type 2 of creating object

obj2.display();

for( key in obj2) 
	document.write( key +' is '+ obj[key]+' <br/>');


document.write(' <br/>');
document.write(' <br/>');
// ***************** CREATING A CONSTRUCTOR FUNCTION *****************************************
// Constructor - creates an on=bject for you and populates each attributes for you
document.write('***************** CREATING A CONSTRUCTOR FUNCTION *****************************');

function info(n, s, g) {
	this.name = n;
	this.siblings = s;
	this.game = g;
}
var constructorFuncObj = new info("PRiyanka Singh", 2, 'Table Tennis');
document.write(' <br/>'+constructorFuncObj['name']);

document.write(' <br/>');
document.write(' <br/>');
// ***************** MATH OBJECT *****************************************
document.write('***************** MATH OBJECT *****************************');

document.write(' <br/>');
document.write(Math.sqrt(Math.max(Math.round(Math.PI), 30, Math.random())));
document.write(' <br/>');

document.write(' <br/>');
document.write(' <br/>');
// ***************** DATE OBJECT *****************************************
document.write('***************** DATE OBJECT *****************************');
document.write(' <br/>');
document.write(new Date().getHours());
document.write(' <br/>');
