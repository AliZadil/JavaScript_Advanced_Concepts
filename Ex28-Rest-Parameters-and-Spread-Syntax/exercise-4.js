function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}
// function sum(...rest){
//   return rest.reduce((a,b) => a + b);
// }


const numbers = [1, 2, 3];

// console.log(sum(numbers[0], numbers[1], numbers[2]));
console.log(sum(...numbers));