class IceCreamMaker {
 churn() {
  console.log('Churning cream');
 }

 freeze() {
  console.log('Freezing cream');
 }

 makeIceCream() {
  this.churn();
  this.freeze();
 }
}

var iceCreamMaker = new IceCreamMaker();

iceCreamMaker.makeIceCream();

