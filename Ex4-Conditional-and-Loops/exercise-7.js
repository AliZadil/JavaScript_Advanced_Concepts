function sumUntil(maxValue) {
  let result = 0;
  for (let index = 0; index < maxValue; index++) {
    result = result + index +1;
  }
  return(result);
}

/* 
function sumUntil(maxValue) {
  return (maxValue*(maxValue+1)/2);
}
this would be simpler, just saying...
*/

console.log(sumUntil(5));