class User {
 constructor(name, age) {
  this.name = name;
  this.age = age;
 }

 greet() {
  console.log('Hi, I study ' + this
   .major);
 }
}

class Student extends User {
 constructor(name, age, major) {
  super(name, age);
  this.major = major;
 }
}

var student1 = new Student('Sam', 25,
 'chemistry');
var student2 = new Student('Anne', 22,
 'Architecture');


console.log(student1);
student1.greet();
student2.greet();

