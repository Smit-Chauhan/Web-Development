 const getPrice = (total = 200,
    discount = 3) => total - (discount /
    100 * total);
   
   console.log(getPrice());