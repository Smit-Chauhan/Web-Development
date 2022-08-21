class User {
 constructor(name) {
  this.name = name;
  this.isOnline = true;
 }
 sayHi() {
  console.log("Hi, I'm " + this.name);
 }
}
var user1 = new User("Arya");
var user2 = new User("Jon");
user1.sayHi();
user2. sayHi() ;
