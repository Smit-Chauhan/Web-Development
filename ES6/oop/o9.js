class Person {
 greet() {
  console.log('Hello!');
 }
}

class Professor extends Person {
 greet() {
  console.log('Salutations!');
 }
}

var professor = new Professor();

professor.greet = function() {
 console.log('Good news, everyone!');
}

professor.greet();