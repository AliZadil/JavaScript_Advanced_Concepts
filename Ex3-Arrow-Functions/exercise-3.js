let sum = (a, b)=> {return (a + b)}

let subtract =(a, b)=> {return (a - b)}

let multiply =(a, b)=> {return (a * b)}

let divide = (a, b)=> {return (a / b)}

let log = (value)=> {console.log(value)}

log(divide(multiply(sum(2,4),subtract(sum(5,2),2)),5))