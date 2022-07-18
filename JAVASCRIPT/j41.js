function getDiscount(age) {
 if (age >= 65) {
  return "50% OFF";
 }
 return "0% OFF";
}

var discount = getDiscount(18);
console.log(discount);