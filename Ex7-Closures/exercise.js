
function sayHelloName(callback){
    setTimeout(function(){
        callback();
    },1000);
}
function printName() {
    let helloName = "Hello John"
    function inner(){
        console.log(helloName);
    }
    return inner;
}

sayHelloName(printName());


