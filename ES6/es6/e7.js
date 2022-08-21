
const getPrice = (total) => {
 const tax = 0.16;
 return total + (tax * total);
}

console.log(getPrice());