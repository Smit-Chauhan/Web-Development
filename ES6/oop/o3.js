var car = {
 honk: function() {
  console.log('HONK!');
 }
};

var myCar = Object.create(car);

myCar.honk();
