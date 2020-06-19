function nonsense(string) {
  var blab = function () {
    alert(string);
  };
  return setTimeout(blab ,2000 );
}
// setTimeout(() => nonsense("hello"),2000);
nonsense("hi");
// 
function nonsense(string) {
    var blab = function () {
      alert(string);
    };
    return blab;
  }
    var blabLater= nonsense("manish"); // fn
    var blabAgainLater = nonsense("kushare"); //fn

    blabLater(); // "manish"
    blabAgainLater(); // "kushare"
//

var lastNameTrier = function(firstName){
         var name = firstName;
     var innerFunction = function(lastName) {
         var fullName = name + " " + lastName;
         return fullName;
     };
     return innerFunction;
 };
 var firstNameFarmer = lastNameTrier('Farmer');
 firstNameFarmer('Brown');
 firstNameFarmer('Jane'); 
firstNameFarmer('Lynne'); 