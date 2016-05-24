//JSON object
/*var myCar = {
 color: 'red',
 number: 'SB10XCI'
 };

 myCar.honk = function(){
 console.log("Honk!");
 };

 myCar.honk();*/



//A function to create a car
/*var createCar = function(){
 var myCar = {};

 myCar.honk = function(){
 console.log("Honk!");
 };

 return myCar;
 }

 var myCar = createCar();
 myCar.honk();*/



//A function constructor
/*var Car = function(){
 this.honk = function(){
 console.log("Honk!");
 };
 };

 var myCar = new Car();
 myCar.honk();

 Car.honk = function(){
 console.log("Honk, honk!");
 };
 console.log(myCar.constructor);
 myCar.honk();

 var myCar1 = new Car();
 myCar1.honk();*/




//Using a prototype
/*var Car = function(){};
 Car.prototype.honk = function(){
 console.log("Honk");
 };

 var myCar = new Car();
 myCar.honk();

 Car.prototype.honk = function(){
 console.log("Honk, honk");
 };

 myCar.honk();
 var myCar1 = new Car();
 myCar1.honk();

 //Car.prototype.driver = function(){
 //    console.log("I am the best driver");
 //};
 //myCar1.driver();
 */




//Inheritance
/*var Vehicle = function(){};
 Vehicle.prototype.drive = function(){
 console.log("vrooom");
 };

 var Car = function(){};
 Car.prototype = new Vehicle();
 Car.prototype.honk = function(){
 console.log("Honk");
 };


 var myCar = new Car();
 myCar.drive();
 myCar.honk();*/

//inheritance == chain of prototypes



//Object.create() only new browsers support
/*var person = {
 firstname : 'Default',
 lastname : 'Default',
 greet : function(){
 return 'Hi'+ this.firstname;
 }
 }

 var john = Object.create(person);
 console.log(john);

 //john.firstname = 'John';
 //console.log(john);

 //Object create template if you have old browsers
 Object.create = function(o){
 var F = function(){}; //temporary constructor
 F.prototype = o; //set prototype
 return new F();
 };*/


//ES6
/*class Person {
 constructor(firstname, lastname) {
 this.firstname = firstname;
 this.lastname = lastname;
 }

 greet(){
 return 'Hi'+ this.firstname;
 }


 }

 //sets the prototype
 class Student extends Person {
 constructor(firstname, lastname){
 super(firstname, lastname);
 }

 greet(){
 return 'Yo '+ this.firstname;
 }

 }

 var s = new Student('John', 'Doe');
 console.log(s.greet());*/


//Using closure to create factory method
/*function makeVehicles(type){
 return function(){
 if (type === "Car"){
 console.log("I created a car");
 }

 if (type === "Bike") {
 console.log("I created a bike");
 }
 }
 }

 var carFactory = makeVehicles("Car");
 var bikeFactory = makeVehicles("Bike");

 carFactory();
 bikeFactory();*/

//even if makeVahicle execution context is clossed after the method is called, the inner function will know the type



















//Callback
/*
var result = database.query("SELECT * FROM hugetable");
console.log("Hello World");



database.query("SELECT * FROM hugetable", function(rows) {
	var result = rows;
});
console.log("Hello World");*/
