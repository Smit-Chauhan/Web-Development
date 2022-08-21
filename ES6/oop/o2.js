var car = {
 drive: function() {
  console.log('Vroom!');
 }
};

var myCar = Object.create(car);

console.log(myCar);
