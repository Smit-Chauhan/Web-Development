function getTaxedSalary(salary) {
 if (salary > 2100) {
  salary = salary - 500;
 }
 return salary;
}

var income = getTaxedSalary(2100);
console.log(income);