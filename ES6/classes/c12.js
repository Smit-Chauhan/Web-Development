
class Human {
 constructor(weapon) {
  this.weapon = weapon;
  this.health = 100;
 }

 receiveDamage() {
  this.life = this.health - 10;
 }

 attack() {
  console.log("Swings " + this.weapon);
 }
}

class Warrior extends Human {
 constructor(weapon, warCry) {
  super(weapon);
  this.warCry = warCry;
 }

 receiveDamage() {
  this.health = this.health - 5;
 }

 attack() {
  super.attack();
  console.log(this.warCry);
 }
}

var human = new Human("axe");
human.attack();
var warrior = new Warrior("sword",
 "Barritus!");
warrior.attack();
