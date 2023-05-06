const number = 15;


let ourPromise = (nbr) => {
    return new Promise((resolve, reject) => {
        if(nbr > 10){
            resolve("IT WORKS!!!");
        } else{
            reject("well...");
        }
    })
}


ourPromise(number)
    .then((val) => console.log(val))
    .catch((val) => console.error(val))