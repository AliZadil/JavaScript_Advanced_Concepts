
function sayHelloName(callback){
    setTimeout(function(){
        callback();
    },1000);
}
function printName() {
    let helloName = "Hello John"
    function inner(){
        return(helloName)
    }
    console.log(inner())
}

sayHelloName(printName);


