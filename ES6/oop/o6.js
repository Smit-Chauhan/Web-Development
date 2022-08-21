class Coffeemaker {
 heatWater() {
  console.log('Heating water');
 }

 brew() {
  console.log(
   'Adding water to grounds');
 }

 filter() {
  console.log('Filtering coffee');
 }

 makeCoffee() {
  this.heatWater();
  this.brew();
  this.filter();
 }
}

var coffeMaker = new Coffeemaker();
coffeMaker.makeCoffee();

