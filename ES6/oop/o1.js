var rectangle = {
 base: 3,
 height: 4,
 getArea: function() {
  return rectangle.base * rectangle
   .height;
 }
};

rectangle.base = 10;
var area = rectangle.getArea();

console.log(area);
