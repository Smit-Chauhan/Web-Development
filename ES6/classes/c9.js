
class Animal {
 constructor(name) {
  this.name = name;
 }
}
class Dog extends Animal {}
var dog = new Dog("Pug");
console.log(dog);
