import {it, expect} from "./test_lib";

function Dog (status) {
  console.log(this);
  this.status = status || "normal";
};

// new Dog("happy");

function Person () {
  console.log(this);
  this.pet = function (dog) {
    dog.status = "happy";
  };
  this.forgetFood = function (dog) {
    dog.status = "disgruntled";
  };
};

var sadie = new Dog();
var mason = new Person();

it("should make Sadie happy when Mason pets her", function(){
  expect(sadie.status).toBe('normal');
  mason.pet(sadie);
  expect(sadie.status).toBe('happy');
  sadie.status = "normal";
});

it("sadie should be unhappy when she isn't fed", function() {
  expect(sadie.status).toBe('normal');
  mason.forgetFood(sadie);
  expect(sadie.status).toBe('disgruntled');
});
