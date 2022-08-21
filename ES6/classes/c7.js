
class Sport {
 constructor(name) {
  this.name = name;
  this.scoreValue = 0;
  this.periods = 4;
  this.result = 0;
 }
 score() {
  this.result += this.scoreValue;
  console.log(this.result);
 }
}
var sport1 = new Sport("Football");
var sport2 = new Sport("Soccer");
sport1.scoreValue = 6;
sport2.scoreValue = 1;
sport1.score();
sport2.score();