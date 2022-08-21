class Person {
 constructor(name, age) {
  this.name = name;
  this.age = age;
 }
}

class Parent extends Person {
 constructor(name, age, kids) {
  super(name, age);
  this.kids = kids;
 }
}

var parent = new Parent('Sally', 40, 2);

console.log(parent);

