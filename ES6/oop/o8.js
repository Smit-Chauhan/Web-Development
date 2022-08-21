class Car {
 lockDoors() {
  console.log('Locking 4 doors');
 }
}

class Coupe extends Car {
 lockDoors() {
  console.log('Locking 2 doors');
 }
}

var car = new Car();
var coupe = new Coupe();

car.lockDoors();
coupe.lockDoors();

