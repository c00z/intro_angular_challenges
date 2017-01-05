console.log('challenge #3 -- app.js loaded!');

var app = angular.module("appThree", []);
app.controller("infoController", infoController)

function infoController(){
  this.name = "Zach Cusimano"; // default name
  this.height = 5.9; // default height in feet
}
