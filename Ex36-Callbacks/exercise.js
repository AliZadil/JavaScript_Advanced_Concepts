const helloCallback = () => console.log("Hello");

function repeatHello(cb){
    const print = setInterval(cb, 1000);
    setTimeout(() => {
        clearInterval(print);
    }, 5000);
}

repeatHello(helloCallback);
