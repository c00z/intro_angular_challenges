console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("ClassController", ClassController);


function WelcomeController(){
  this.full_name = "Zach Cusimano";
  this.age = "28";
  this.city = "Las Vegas";
  this.state = "Nevada";
  this.shout = function(yell){
    return yell.toUpperCase() + "!";
  }
}

function ClassController() {
  this.class_name = "WDI 34";
  this.enrolled_students = "11";
  this.start_date = "11/28/2016"
  this.end_date = "3/03/2017"
  this.daysRemaining = function() {
    var sec = Date.parse(this.end_date) - Date.now();
    console.log(sec);
    var days = Math.floor( sec/1000/24/60/60);
    console.log(days);
    return days;
  }
  }


//
// li>Class Name: {{ "class_name" }}</li>
// <li>Students: {{ "enrolled_students" }}</li>
// <li>Start: {{ "start_date" }}</li>
// <li>End: {{ "end_date" }}</li>
// <!-- HINT: Create a daysRemaining() function in your controller that calculate this -->
// <li>Days Left: {{ "daysRemaining()" }}</li>
