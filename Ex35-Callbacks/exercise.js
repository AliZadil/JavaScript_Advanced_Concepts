const helloCallback = () => console.log("Hello");

// This can also work:
// function helloCallback(){
//     console.log("Hello");
// }


function repeatHello(cb){
    setInterval(cb, 1000);
}

repeatHello(helloCallback);

// I am not sure why it MUST be an arrow function, 
// but arrow functions are cleaner and they inherit 'this.' 
// value from enclosing scope.