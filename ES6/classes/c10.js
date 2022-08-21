
class Employee {
 constructor(company) {
  this.company = company;
 }
 clockIn() {
  console.log("Starting work at " +
   this.company);
 }
}
class Lawyer extends Employee {}
class LineCook extends Employee {}
var employee1 = new Lawyer(
 "Human Rights Lawyers Limited");
var employee2 = new LineCook(
 "Tasty Veggie Bar");
employee1.clockIn();
employee2.clockIn();