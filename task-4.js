const countTotalSalary = function (employees) {
  'use strict';
  // Write code under this line
  const values = Object.values(employees);
  let result = 0;
  console.log(values);
  for (const value of values) {
    result += value;
  }
  return result;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
//console.log(countTotalSalary(supports));
// 500
