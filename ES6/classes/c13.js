class Animal {
 constructor(name) {
  this.name = name;
 }
 speak() {
  console.log("I am a " + this.name);
 }
}
class Dog extends Animal {
 constructor(name, trainer) {
  super(name);
  this.trainer = trainer;
 }
}
var rover = new Dog("Lab", "Terry");
rover.speak();