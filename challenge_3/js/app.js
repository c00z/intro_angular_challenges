console.log('challenge #3 -- app.js loaded!');

var app = angular.module("appThree", []);
app.controller("infoController", infoController)
app.controller("loanController", loanController)


function infoController(){
  this.name = "Zach Cusimano"; // default name
  this.height = 5.9; // default height in feet
}

function loanController(){
  this.amount = 13000;
  this.apr = 1.2;

  this.month = function(n){
    var yearly_interest = (this.amount * (this.apr / 100) );
    var monthly_interst = ( yearly_interest / 12 );
    var accrued_interest = n * monthly_interst || 0;
    return {
      accrued_interest: accrued_interest,
      total_balance: this.amount + accrued_interest
    }
  }
}
