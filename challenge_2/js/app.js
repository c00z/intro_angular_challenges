console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);

function WelcomeController(){
  this.full_name = "Zach Cusimano";
  this.age = "28";
  this.city = "Las Vegas";
  this.state = "Nevada";
  this.shout = function(yell){
    return yell.toUpperCase() + "!";
  }
}
